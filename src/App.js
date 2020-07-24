import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentInputs, setCurrentInputs] = useState({
    sentence: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    const newState = { ...currentInputs, [property]: value };
    console.log("App -> currentInputs", currentInputs);
    setCurrentInputs(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <>
      <div className="App">

        <form onSubmit={handleSubmit}>
          <label htmlFor="sentence">Main Sentence</label>
          <input
            type="text"
            id="sentence"
            name="sentence"
            onChange={handleChange}
            required
          />
          <input type="submit" />
        </form>

        <form onSubmit={handleSubmit}>
          <label htmlFor="option1">option1</label>
          <input
            type="text"
            id="option1"
            name="option1"
            onChange={handleChange}
            required
          />
          <input type="submit" />
        </form>

        <form onSubmit={handleSubmit}>
          <label htmlFor="option2">option2</label>
          <input
            type="text"
            id="option2"
            name="option2"
            onChange={handleChange}
            required
          />
          <input type="submit" />
        </form>

        <form onSubmit={handleSubmit}>
          <label htmlFor="option3">option3</label>
          <input
            type="text"
            id="option3"
            name="option3"
            onChange={handleChange}
            required
          />
          <input type="submit" />
        </form>

        <form onSubmit={handleSubmit}>
          <label htmlFor="option4">option4</label>
          <input
            type="text"
            id="option4"
            name="option4"
            onChange={handleChange}
            required
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default App;
