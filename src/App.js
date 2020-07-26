import React, { useState, useEffect } from "react";
import "./App.css";

const _ = require("lodash");

export default function App() {
  const initialStory = {
    sentence: "Write a cool story here",
    children: [],
  };

  const [objectTree, setObjectTree] = useState(initialStory);
  const [userPath, setUserPath] = useState([]);
  const [currNode, setCurrNode] = useState(initialStory);
  const [sentence, setSentence] = useState("");

  useEffect(() => {
    const findCurrentLevel = () => {
      if (userPath.length < 1) setCurrNode(objectTree);
      else {
        const currentLevelPath = userPath.join(".");
        const currentLevel = _.get(
          objectTree,
          currentLevelPath,
          "Error: Please try again"
        );
        setCurrNode(currentLevel);
      }
    };
    findCurrentLevel();
  }, [userPath, objectTree]);

  const handleSentenceChange = (e) => {
    setSentence(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currNodeClone = _.cloneDeep(currNode);
    const newObject = {
      sentence: e.target.elements[0].value,
      children: [],
    };

    if (currNode.children.length > 3) {
      alert("You have entered the maximum number of sentences (4)");
    } else {
      const objectTreeClone = _.cloneDeep(objectTree);
      const joinedUserPath = userPath.join(".");
      const currUserPath =
        userPath.length < 1 ? "children" : `${joinedUserPath}.children`;

      currNodeClone.children.push(newObject);
      const newObjectTreeState = _.update(
        objectTreeClone,
        currUserPath,
        () => currNodeClone.children
      );
      setObjectTree(newObjectTreeState);
    }
    setSentence("");
  };

  const handleSentenceClick = (e) => {
    const newPathChoice = `children[${e.target.id}]`;
    const userPathClone = [...userPath, newPathChoice];
    setUserPath(userPathClone);
  };

  const handleBackClick = () => {
    const newUserPathState = userPath.slice(0, userPath.length - 1);
    setUserPath(newUserPathState);
  };

  const handleBackToStartClick = () => {
    setUserPath([]);
  };

  const handleReset = () => {
    setUserPath([]);
    setObjectTree(initialStory);
  };

  const createChildrenList = () => {
    if (currNode.children.length > 0) {
      return currNode.children.map((child, i) => (
        <button key={i} id={i} onClick={handleSentenceClick}>
          {child.sentence}
        </button>
      ));
    }
  };

  return (
    <div className="App">
      <h1>Story Builder</h1>
      <h2>Current Sentence: {currNode && currNode.sentence}</h2>
      {currNode && createChildrenList()}

      <form onSubmit={handleSubmit}>
        <label htmlFor="sentence">Enter your sentence here:</label>
        <input
          type="text"
          name="sentence"
          id="sentence"
          onChange={handleSentenceChange}
          value={sentence}
          required
        />
        <input type="submit" value="Submit Sentence" />
      </form>
      <button type="button" onClick={handleBackClick}>
        Back
      </button>
      <button type="button" onClick={handleBackToStartClick}>
        Back To Start
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
