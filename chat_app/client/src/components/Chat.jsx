import './Chat.css'

export default function Chat() {
  return (
    <div className="chat">
      <div className="chat-content">
        <ul>
          <li>mensaje 1</li>
          <li>mensaje 2</li>
          <li>mensaje 3</li>
          <li>mensaje 4</li>
        </ul>
        <form className="send">
          <input
            type="text"
            name="message"
            id="message"
            className="message-inp"
            placeholder="Escribe tu mensaje aqui"
          />
          <input type="submit" className="submit-message" value={"ey"} />
        </form>
      </div>
    </div>
  );
}
