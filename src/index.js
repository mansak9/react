import React from "react";
import ReactDOM from "react-dom";

const FunctionalComponent = () => (
  <div>
    <h1>함수형 컴포넌트</h1>
    <h2>현재 시간은?{new Date().toLocaleTimeString()}</h2>
  </div>
);

class StatelessComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>상태가 없는 클래스형 컴포넌트</h1>
        <h2>현재 시간은?{new Date().toLocaleTimeString()}</h2>
      </div>
    );
  }
}

class StatefullComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: new Date().toLocaleTimeString()
    };
  }
  render() {
    return (
      <div>
        <h1>안녕? 이거든 상태가 있는 컴포넌트야!</h1>
        <h2>현재 시간은?{this.state.now}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <FunctionalComponent />
    <StatefullComponent />
    <StatelessComponent />
  </div>,
  document.getElementById("root")
);
