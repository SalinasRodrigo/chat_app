import { useState } from "react";
import "./App.css";
import ChatList from "./components/ChatList";
import Chat from "./components/Chat";



function App() {
  const [user, setUser] = useState(null);
  const [contacts, setContacts] = useState([]);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const newUser = Object.fromEntries(data);
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
        getContacts(newUser.id);
      });
  };

  const getContacts = (id) => {
    fetch(`chat/user/contacts/${id}`)
      .then((res) => res.json())
      .then((response) => {
        const newContacts = response;
        console.log(newContacts)
        setContacts(newContacts);
      });
  }

  return (
    <>
      <>
        {user ? (
          <main>
            <ChatList setUser={setUser} contacts={contacts} />
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
