import { useState } from "react";
import Heading from "./Heading";
import Counter from "./Counter";
import Message from "./Message";
import ToggleSwitch from "./ToggleSwitch";

function App() {
  // const [name, setName] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   console.log(`Name submitted: ${name}`);

  //   setName("");
  // };

  // const handleInputChange = (event) => {
  //   setName(event.target.value);
  // };

  return (
    <>
      {
        /* <form onSubmit={handleSubmit}>
        <Heading header="Input your name" />
        <label>
          Name: <input type="text" value={name} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>

        <Counter />
      </form> */

        // <Message />

        <div>
          {" "}
          <ToggleSwitch />{" "}
        </div>
      }
    </>
  );
}

export default App;
