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
    setUser(1)
  }

  return (
    <>
      <>
        {user ? (
          <main>
            <ChatList />
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
