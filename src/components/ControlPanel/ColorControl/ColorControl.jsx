import React from "react";
import { useEffect, useState } from "react";

function ColorControl() {
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
      <div className="control-section">
        <div className="title">
          <h3>Colors:</h3>
        </div>
        <div className="options" onChange={onColorChange}>
          <input type="color" id="color1" defaultValue="#845ec2" />
          <input type="color" id="color2" defaultValue="#d65db1" />
          <input type="color" id="color3" defaultValue="#ff6f91" />
          <input type="color" id="color4" defaultValue="#ff9671" />
          <input type="color" id="color5" defaultValue="#ffc75f" />
          <input type="color" id="color6" defaultValue="#f9f871" />
        </div>
      </div>
    </div>
  );
}

export default ColorControl;
