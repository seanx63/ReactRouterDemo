import React from "react";
import Navbar from "./Navbar";

const Clojure = () => {
  return (
    <div>
      <Navbar />
      <a
        title="Original: Pykello Vector:  Tom Hickey and Rich Hickey, Public domain, via Wikimedia Commons"
        href="https://commons.wikimedia.org/wiki/File:Clojure_logo.svg"
      >
        <img
          width="256"
          alt="Clojure logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Clojure_logo.svg/256px-Clojure_logo.svg.png"
        />
      </a>
      <h2>Clojure</h2>
      <a href="https://clojure.org/" class="ctext">
        Official website
      </a>
      <br />
      <br />
      <p>
        "Clojure is a dialect of Lisp, and shares with Lisp the code-as-data
        philosophy and a powerful macro system. Clojure is predominantly a
        functional programming language, and features a rich set of immutable,
        persistent data structures. When mutable state is needed, Clojure offers
        a software transactional memory system and reactive Agent system that
        ensure clean, correct, multithreaded designs."
      </p>
      <cite>Rich Hickey, author of Clojure and CTO Cognitect</cite>
      <p>
        Clojure as a LISP dialect differs greatly in syntax than programming
        languages that focus on Object-oriented principles as LISP dialects are
        known for focusing on functional programming.
      </p>
    </div>
  );
};

export default Clojure;
