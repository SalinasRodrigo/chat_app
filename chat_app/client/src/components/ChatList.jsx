/* eslint-disable react/prop-types */
import "./ChatList.css";

export default function ChatList({setUser}) {
  
  const handleClick = () => {
    setUser(null)
  }

  return (
    <div className="chat-list">
      <ul>
        <li>
          <a href="#">chat 1</a>
        </li>
        <li>
          <a href="#">chat 2</a>
        </li>
        <li>
          <a href="#">chat 3</a>
        </li>
      </ul>
      <button onClick={handleClick}>Cerrar session</button>
    </div>
  );
}
