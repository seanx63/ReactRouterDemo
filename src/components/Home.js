import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <h2>
        Overview of 5 different programming languages utilizing the Java Virtual
        Machine.
      </h2>
      <br />
      <p>
        Java Virtual Machine (also known as the JVM) is a Virtual Machine
        designed to run Java bytecode.
      </p>
      <p>
        Java bytecode can be expressed as bytecode class files compiled by the
        Java compiler.
      </p>
      <p>
        However, Java bytecode can be compiled from other languages than just
        Java.
      </p>
      <p>
        This website showcases 5 different languages that can be compiled to
        Java bytecode.
      </p>
      <br />
      <a
        title="Michelle Ridomi, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons"
        href="https://commons.wikimedia.org/wiki/File:JvmSpec7.png"
        target="_blank"
        rel="noreferrer"
      >
        <img
          width="512"
          alt="JvmSpec7"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/JvmSpec7.png/512px-JvmSpec7.png"
          target="_blank"
          rel="noreferrer"
        ></img>
      </a>
    </div>
  );
};

export default Home;
