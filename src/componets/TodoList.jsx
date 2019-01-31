import React from "react";
import TodoListItem from "../componets/TodoListItem";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.handleTitleClick = this.handleTitleClick.bind(this);
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentDidMount");
  }

  handleTitleClick() {
    console.log("click", this);
  }

  handleInputChange = ({ target, index }) => {
    console.log(index);
    console.log(this.props.items);
  };

  render() {
    const { title, items } = this.props;

    return (
      <div className="TodoList" style={{ color: "blue" }}>
        <h2 onClick={() => this.handleTitleClick()}>{title}</h2>
        <ul>
          {items.map(({ name, completed }, index) => {
            return <TodoListItem {...items} index={index} />;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
