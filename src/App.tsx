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

    // TODO: make API call for dog name
    //       add store in state variable
  }

  return (
    <main>
      <h1>Dog Generator 🐶</h1>
      <button onClick={generateDog}>Generate Dog</button>

      <div>
        {/* TODO: Display dog name from state variable */}
        <h2>TODO</h2>
        <img src={dogImage} alt="dog" />
      </div>
    </main>
  );
}

export default App;
