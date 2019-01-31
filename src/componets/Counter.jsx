import React from "react";
import { Button, Input } from "antd";
import "./Counter.less";

//const Search = Input.Search;

class Counter extends React.Component {
  //count = 0;
  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      open: false,
      list: [1, 2, 3, 4, 5]
    };
  }

  // state = {
  //   count: 0
  // };

  handleClick = e => {
    const { list } = this.state;
    let num = Math.random() * 1000;
    num = Math.ceil(num);
    console.log(num);

    list.push(num);

    this.setState({
      list: list
    });

    // this.setState(prevState => {
    //   return { count: prevState.count + 1 };
    // });
    // this.setState(prevState => {
    //   return { count: prevState.count + 1 };
    // });
    // this.setState(prevState => {
    //   return { count: prevState.count + 1 };
    // });
    // this.setState(prevState => {
    //   return { count: prevState.count + 1 };
    // });
    //this.count = this.count + 1;
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    // console.log("render...", this.count);
    // if (this.count === 10) {
    //   //this.forceUpdate();
    //   open: true;
    // }
  };

  handleSearch = value => {
    console.log(value);
  };

  render() {
    return (
      <div className="counter">
        <header className="App-header">
          {this.state.list.map((item, idx) => {
            return <div key={`list-item-${idx}`}>{item}</div>;
          })}

          <Input.Search
            className={"Search"}
            placeholder="input search text"
            onSearch={this.handleSearch}
            enterButton
            style={{ width: 320 }}
          />
          <Button onClick={this.handleClick}>카운터</Button>

          {/* <Modal title="Basic Modal" visible={true} />*/}
        </header>
      </div>
    );
  }
}

export default Counter;
