import React, { Component } from "react";
import "./App.css";
import Todos from "./componets/Todos";

const data = [
  { name: "React 개발에 필요한 환경을 구축한다.", completed: true },
  {
    name: "새로운 자바스크립트 문법을 익힌다. ES2015(ES6), ES7, ES8",
    completed: false
  },
  { name: "개발 편의를 위한 VSCode IDE를 익힌다.", completed: true },
  { name: "기본적인 Git사용법을 익힌다.", completed: true },
  { name: "PR 코드리뷰를 응용한 개발 프로세스를 익힌다.", completed: true },
  { name: "React로 간단한 노트앱을 만들어 본다.", completed: true }
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <Todos title={"강의 목표"} items={data} />
      </div>
    );
  }
}

export default App;
