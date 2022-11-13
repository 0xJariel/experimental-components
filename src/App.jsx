import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CodeController from "./components/CodeController/CodeController";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CodeController />
    </div>
  );
}

export default App;
