import "./App.css";
import GreetingComponent from "./components/greeting.tsx";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  window.onload = function () {
    setName("Recruteur");
  };

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="App">
      <GreetingComponent name={name} />
      <div>
        <label>
          change the name
          <br />
          <input type="text" name="change_name" onChange={handleChange} />
        </label>
      </div>
    </div>
  );
}

export default App;
