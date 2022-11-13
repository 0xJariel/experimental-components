import React from "react";
import "./CodeController.css";

function CodeController() {
  return (
    <div className="CodeController">
      <div className="tabs">
        <div className="active">CONTROLS</div>
        {/* <div>HTML</div> */}
        <div>CSS</div>
      </div>

      <div className="dashboard">
        <div className="dashboard-body">this can be code, or controls</div>
      </div>
    </div>
  );
}

export default CodeController;
