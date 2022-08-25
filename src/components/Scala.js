import React from "react";
import Navbar from "./Navbar";

const Scala = () => {
  return (
    <div>
      <Navbar />
      <a
        title="Lightbend, Inc., CC BY 4.0 &lt;https://creativecommons.org/licenses/by/4.0&gt;, via Wikimedia Commons"
        href="https://commons.wikimedia.org/wiki/File:Scala-full-color.svg"
        target="_blank"
        rel="noreferrer"
      >
        <img
          width="512"
          alt="Scala-full-color"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Scala-full-color.svg/512px-Scala-full-color.svg.png"
          target="_blank"
          rel="noreferrer"
        />
      </a>
      <h2>Scala</h2>
      <a href="https://www.scala-lang.org/" target="_blank" rel="noreferrer">Official website</a>
      <br />
      <br />
      <p>
        A strong statically typed language that implements more functional
        programming features than Java while still allowing for the strengths of
        Object-oriented Programming. May also compile to JavaScript.
      </p>
    </div>
  );
};

export default Scala;
