import { useState } from "react";
import "./App.css";

function App() {
  // define state variables

  function getDog() {
    // TODO: make API call
  }

  return (
    <main>
      <h1>Dog Generator(?)</h1>
      <button onClick={getDog}>Generate Dog</button>

      <div>
        <h2>TODO</h2>
        <img src="TODO" alt="dog" />
      </div>
    </main>
  );
}

export default App;
