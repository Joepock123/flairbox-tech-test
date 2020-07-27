import React, { useState, useEffect } from "react";
import "./App.css";
import * as SC from "./style";

const _ = require("lodash");

export default function App() {
  const initialStory = {
    sentence: "'Every story has a beginning, a middle, and an end. Not necessarily in that order.'",
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
        <SC.ButtonLink key={i} id={i} onClick={handleSentenceClick}>
          {child.sentence}
        </SC.ButtonLink>
      ));
    }
  };

  return (
    <SC.Main className="App">
      <h1>The <SC.Span>Flairbox </SC.Span>Story Builder</h1>
      <SC.P tag>Add up to <SC.Span>4 </SC.Span>sentences after each sentence,</SC.P>
      <SC.P tag>Select your desired sentence,</SC.P>
      <SC.P tag>Make sure there's a fairytale ending.</SC.P>
      <SC.P bold>{currNode && currNode.sentence}</SC.P>
      {currNode && createChildrenList()}

      <SC.Form onSubmit={handleSubmit}>
        <label htmlFor="sentence">Enter your sentence here:</label>
        <SC.Input
          type="text"
          name="sentence"
          id="sentence"
          onChange={handleSentenceChange}
          value={sentence}
          required
        />
        <SC.Button type="submit" primary>
          Submit
        </SC.Button>
        <div>
          <SC.Button type="button" onClick={handleBackClick}>
            Back
          </SC.Button>
          <SC.Button type="button" onClick={handleBackToStartClick}>
            Back To Start
          </SC.Button>
          <SC.Button type="reset" onClick={handleReset}>
            Reset
          </SC.Button>
        </div>
      </SC.Form>
    </SC.Main>
  );
}
