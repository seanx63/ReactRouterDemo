import React from "react";
import Navbar from "./Navbar";

const Groovy = () => {
  return (
    <div>
      <Navbar />
      <a
        title="Zorak1103, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
        href="https://commons.wikimedia.org/wiki/File:Groovy-logo.svg"
      >
        <img
          width="256"
          alt="Groovy-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Groovy-logo.svg/256px-Groovy-logo.svg.png"
        />
      </a>
      <h2>Groovy</h2>
      <a href="https://groovy-lang.org/">Official website</a>
      <br />
      <br />
      <p>A static and dynamic language that may also do scripting.</p>
    </div>
  );
};

export default Groovy;
