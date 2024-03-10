import { useState } from "react";
import "./App.css";

function App() {
  const [dogImage, setDogImage] = useState();
  // TODO: define additional state variable

  function generateDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
      });

    // TODO: make API call for joke and store
    //       necessary data in state variables
  }

  return (
    <main>
      <h1>Dog Meme Generator 🐶</h1>
      <button onClick={generateDog}>Generate Dog Meme</button>

      <div className="meme">
        {/* TODO: Replace placeholders for setup and punchline
                  with fetched data from state variable */}
        <h2>Setup</h2>
        <img src={dogImage} alt="dog" />
        <p>Punchline</p>
      </div>
    </main>
  );
}

export default App;
