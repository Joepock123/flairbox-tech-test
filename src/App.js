import React, { useState } from "react";
import "./App.css";

function App() {
  const sentenceObject = {
    sentence: "1st level",
    1: {
      sentence: "2nd level",
      1: { sentence: "3rd level", 1: {}, 2: {}, 3: {}, 4: {} },
      2: { sentence: "3rd level", 1: {}, 2: {}, 3: {}, 4: {} },
      3: { sentence: "3rd level", 1: {}, 2: {}, 3: {}, 4: {} },
      4: { sentence: "3rd level", 1: {}, 2: {}, 3: {}, 4: {} },
    },
  };

  const [storyObject, setStoryObject] = useState({});
  console.log("App -> storyObject", storyObject);
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
    const property = e.target.firstChild.getAttribute("for");
    let value = e.target.childNodes[1].value;
    const newState = { ...storyObject, [property]: value };
    setStoryObject(newState);
    console.log("handleSubmit -> newState", newState);
  };

  const handleSentenceClick = (e) => {
    console.log(e);
    const newState = { ...storyObject, sentence: "" };
    setStoryObject(newState);
  };

  const handleOption1Click = (e) => {
    console.log(e);
    const newState = { ...storyObject, option1: "" };
    setStoryObject(newState);
  };

  const handleOption2Click = (e) => {
    console.log(e);
    const newState = { ...storyObject, option2: "" };
    setStoryObject(newState);
  };

  const handleOption3Click = (e) => {
    console.log(e);
    const newState = { ...storyObject, option3: "" };
    setStoryObject(newState);
  };

  const handleOption4Click = (e) => {
    console.log(e);
    const newState = { ...storyObject, option4: "" };
    setStoryObject(newState);
  };



  return (
    <>
      <div className="App">
        <h1>Hello world</h1>
        <p>{sentenceObject[1].sentence}</p>
        <p>{sentenceObject[1][1].sentence}</p>

        {storyObject.sentence ? (
          <>
            <h1>{storyObject.sentence}</h1>
            <button onClick={handleSentenceClick}>Edit Sentence</button>
          </>
        ) : (
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
        )}

        {storyObject.option1 ? (
          <>
            <h1>{storyObject.option1}</h1>
            <button onClick={handleOption1Click}>Edit Sentence</button>
          </>
        ) : (
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
        )}

        {storyObject.option2 ? (
          <>
            <h1>{storyObject.option2}</h1>
            <button onClick={handleOption2Click}>Edit Sentence</button>
          </>
        ) : (
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
        )}

        {storyObject.option3 ? (
          <>
            <h1>{storyObject.option3}</h1>
            <button onClick={handleOption3Click}>Edit Sentence</button>
          </>
        ) : (
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
        )}

        {storyObject.option4 ? (
          <>
            <h1>{storyObject.option1}</h1>
            <button onClick={handleOption4Click}>Edit Sentence</button>
          </>
        ) : (
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
        )}
      </div>
    </>
  );
}

export default App;
