import { useState } from "react";

function Message() {
  const [message, setMessage] = useState("Click the button");

  const handleClick = () => setMessage("You clicked the button");

  return (
    <div>
      <button onClick={handleClick}>click me</button>
      <p>{message}</p>
    </div>
  );
}

export default Message;
