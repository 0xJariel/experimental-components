import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Folder from "./components/Folder/Folder";
import Display from "./components/Display/Display";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Folder />
      <Display />
    </div>
  );
}

export default App;
