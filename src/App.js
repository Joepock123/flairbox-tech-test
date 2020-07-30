import React, { useState } from "react";
import "./App.css";
import * as SC from "./style";

const _ = require("lodash");

export default function App() {
  const initialStory = {
    parent: null,
    sentence:
      "'Every story has a beginning, a middle, and an end. Not necessarily in that order.'",
    children: [],
    edit: false,
  };

  const [currNode, setCurrNode] = useState(initialStory);
  const [sentence, setSentence] = useState("");

  const handleSentenceChange = (e) => {
    setSentence(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currNodeClone = _.cloneDeep(currNode);
    const newObject = {
      parent: currNodeClone,
      sentence: e.target.elements[0].value,
      children: [],
      edit: false,
    };

    if (currNode.children.length > 3) {
      alert("You have entered the maximum number of sentences (4)");
    } else {
      currNodeClone.children.push(newObject);
      setCurrNode(currNodeClone);
    }
    setSentence("");
  };

  const handleSentenceClick = (i) => {
    const currNodeClone = _.cloneDeep(currNode);
    const childNode = currNodeClone.children[i];
    setCurrNode(childNode);
  };

  const handleBackClick = () => {
    if (currNode.parent === null) return;
    const currNodeClone = _.cloneDeep(currNode);
    const parentNode = currNodeClone.parent;
    setCurrNode(parentNode);
  };

  const handleBackToStartClick = (currNode) => {
    let currNodeClone = _.cloneDeep(currNode);
    while (currNodeClone.parent !== null) {
      currNodeClone = currNodeClone.parent;
    }
    setCurrNode(currNodeClone);
  };

  const handleReset = () => {
    setCurrNode(initialStory);
  };

  const handleSentenceEdit = (i) => {
    const currNodeClone = _.cloneDeep(currNode);
    let childToChange = currNodeClone.children[i];
    currNodeClone.children[i].edit = true;
    setCurrNode(currNodeClone);
  };

  const handleSentenceEditSubmission = (e, i) => {
    e.preventDefault();
    const newSentenceValue = e.target.elements[0].value;
    const currNodeClone = _.cloneDeep(currNode);
    currNodeClone.children[i].edit = false;
    currNodeClone.children[i].sentence = newSentenceValue;
    setCurrNode(currNodeClone);
  };

  const createChildrenList = () => {
    if (currNode.children.length > 0) {
      return currNode.children.map((child, i) =>
        !child.edit ? (
          <div key={i}>
            <SC.ButtonLink onClick={() => handleSentenceClick(i)}>
              {child.sentence}
            </SC.ButtonLink>
            <button onClick={() => handleSentenceEdit(i)}>Edit</button>
          </div>
        ) : (
          <form onSubmit={(e) => handleSentenceEditSubmission(e, i)}>
            <input type="text"></input>
            <button type="submit">Save</button>
          </form>
        )
      );
    }
  };

  return (
    <SC.Main className="App">
      <h1>
        The <SC.Span>Flairbox </SC.Span>Story Builder
      </h1>
      <SC.P tag>
        Add up to <SC.Span>4 </SC.Span>sentences after each sentence,
      </SC.P>
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
          <SC.Button
            type="button"
            onClick={() => handleBackToStartClick(currNode)}
          >
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
