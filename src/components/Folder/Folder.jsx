import React from "react";
import CodePanel from "../CodePanel/CodePanel";
import ControlPanel from "../ControlPanel/ControlPanel";
import "./Folder.css";

function Folder() {
  return (
    <div className="Folder">
      <div className="tabs">
        <div className="active">CONTROLS</div>
        {/* <div>HTML</div> */}
        <div>CSS</div>
      </div>

      <div className="dashboard">
        <div className="dashboard-body">
          <ControlPanel />
          {/* <CodePanel /> */}
        </div>
      </div>
    </div>
  );
}

export default Folder;
