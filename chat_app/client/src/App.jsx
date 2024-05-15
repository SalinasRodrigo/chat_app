import { useEffect, useState } from "react";
import "./App.css";
import ChatList from "./components/ChatList";
import Chat from "./components/Chat";

const HOST = "127.0.0.1:8000";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const chatSocket = new WebSocket("ws://" + HOST + "/ws/chat/" + 1 + "/");
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const newUser = Object.fromEntries(data);
    console.log(newUser)
    getUser(newUser);
  };

  const getUser = (newUser) => {
    fetch("/chat/login/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((response) => {
        const newUser = response;
        setUser(newUser);
      });
  };

  return (
    <>
      <>
        {user ? (
          <main>
            <ChatList setUser={setUser} />
            <Chat />
          </main>
        ) : (
          <div className="form-bg">
            <form onSubmit={handleSubmit}>
              <h2>Iniciar sesion</h2>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" className="form-email"/>
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" id="password" className="form-password"/>
              <div className="form-btns">
                <input type="submit" value="Confirmar" className="form-submit" />
                <button>Crear usuario</button>
              </div> 
            </form>
          </div>
        )}

      </>
    </>
  );
}

export default App;
