// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component

/*
 > class="" changes to className=""
 > we add style with double {{}} and removing '-' on properties names
 > JSX can reference JS variables with interpolation {nameOfVariable}
*/

function getButtonText () {
    return 'Click on me!';
}

const App = () => {
    const buttonText = 'Click Me!'
    const text = { text: 'Click Me!'}
    const style = {backgroundColor: 'blue', color: 'white'}

    return (
    <div>
        <label className="label" for="name">Enter name: </label>
        <input id="name" type="text"/>
        <button style={style}>
            {buttonText} {text.text}
        </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);