import React, { useEffect, useState } from "react";
import ColorControl from "./ColorControl/ColorControl";
import "./ControlPanel.css";

function ControlPanel() {
  // const [gradient, setGradient] = useState({});
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [color4, setColor4] = useState("");
  const [color5, setColor5] = useState("");
  const [color6, setColor6] = useState("");

  useEffect(() => {
    console.log("hi");

    return () => {
      console.log(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--gradient"
        )
      );
    };
  }, []);

  const onColorChange = (e) => {
    console.log("Color changed!");
    console.log(e.target.id);

    // setGradient((prevState) => ({
    //   // ...prevState,
    //   [e.target.id]: e.target.value,
    // }));
  };

  return (
    <div>
      <ColorControl />
    </div>
  );
}

export default ControlPanel;
