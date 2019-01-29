import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import LectureGoalList from "./componets/LectureGoalList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LectureGoalList />
      </div>
    );
  }
}

export default App;
