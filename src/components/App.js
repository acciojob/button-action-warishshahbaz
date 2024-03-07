import React, { useState } from "react";
import "./../styles/App.css";

const App = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App" id="main">
      <p id="para" className={`${toggle ? "show" : "hide"}`}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
      <button id="click" onClick={() => setToggle(!toggle)}>
        {toggle ? "show" : "hide"}
      </button>
    </div>
  );
};

export default App;
