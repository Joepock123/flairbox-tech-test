# Flairbox Coding Challenge :pencil: 
## Description 
A React web application which lets you build you own story by entering and selecting the next part of the story from 4 options.

[Project brief](https://docs.google.com/document/d/1aOIGox_DkBh1sBV-crRdwltAAQTQPN4WXbn2n_bqZHU/edit)

[Deployed to Netlify.](https://flairbox-story-builder.netlify.app/)

## Acceptability Criteria
- [x] As a user I can enter a starting sentence and save it.
- [x] As a user I can add up to four more sentence inputs and save them.
- [x] As a user I can click on one of the 4 (or fewer) saved sentences so that I can choose the next sentences for it.
- [x] I can go back a step so I can grow the story out in all directions.
- [x]  I can go back to the start to run through my story paths from the beginning and make sure they make sense.

## Supporting tech
- Styled Components
- [Lodash](https://lodash.com/)

## Methodology
I tried to visualize the story's data structure as a node tree. React's `useState` and `useEffect` hooks where used for state management.

- The story is saved in state.
- The current sentence and its options are saved in state.
- The user path is saved in state and this is used to determine which level of the story the user is.
- The biggest challenge of this task was finding a way to mutate deeply nested object values. 
	- The `get` and `update` method from Lodash was used to get and update values in the story object using the user path state.  

## Learning Takeaways
- Mutating deeply nested properties in objects is not easy (without a library)!
- Deep cloning is needed when modifying state of deeply nested objects
- React uses the `key` of map arrays to keep track of the DOM tree on each render

## Setting up the project locally 
On the command line:

* Clone this repo `git clone https://github.com/Joepock123/flairbox-tech-test.git`
* `cd` into directory
* Install project dependencies with `npm install`
* Run the start script `npm start` 
* View the app locally on your browser at [http://localhost:3000](http://localhost:3000).

## Further development & learning
- Understand what the Lodash `get` and `update` methods are doing under the hood 
- Read into React's rendering lifecycle 
- Display the full story to the user at any one time
- Have buttons for each level which allow the user to navigate to any level of the story
- Nicer error handling for the user (no alerts)
