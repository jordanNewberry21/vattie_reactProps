import React, { Component } from 'react';
import './App.css';
// import my components
import MoodInput from './MoodInput/MoodInput'

class App extends Component{
    render(){
      return (
      <div className="App">
        <h1>Mood Ring</h1>
        <MoodInput />
      </div>
    );
  } //end render
} //end class

export default App;
