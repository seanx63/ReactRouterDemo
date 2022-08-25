import React from "react";
import Navbar from "./Navbar";

const Kotlin = () => {
  return (
    <div>
      <Navbar />
      <a
        title="JetBrains, Public domain, via Wikimedia Commons"
        href="https://commons.wikimedia.org/wiki/File:Kotlin_logo_2021.svg"
      >
        <img
          width="512"
          alt="Kotlin logo 2021"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Kotlin_logo_2021.svg/512px-Kotlin_logo_2021.svg.png"
        />
      </a>
      <h2>Kotlin</h2>
      <a href="https://kotlinlang.org/">Official website</a>
      <br />
      <br />
      <p>A statically-typed language known for Android development.</p>
    </div>
  );
};

export default Kotlin;
