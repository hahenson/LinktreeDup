import React from "react";
import Howard from "../Howard.png";

function App() {
  return (
    <div>
      <img className="profile" alt="mypic" src={Howard} />

      <h1>Howard Henson</h1>

      <div className="container">
        <a href="https://hahenson.github.io/">
          <button className="buttonchange">Online Portfolio</button>
        </a>
        <a href="https://www.linkedin.com/in/howardhenson/">
          <button className="buttonchange">Linkedin</button>
        </a>
        <a href="https://app.box.com/s/foez2qumvu5ut8wk1eety3vpqckobgnf">
          <button className="buttonchange">Graphic Design Work</button>
        </a>
        <a href="mailto: hahenson@outlook.com">
          <button className="buttonchange">Email Me</button>
        </a>
      </div>
    </div>
  );
}
export default App;
