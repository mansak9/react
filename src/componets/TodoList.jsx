import React from "react";

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

  render() {
    const { title, items } = this.props;

    return (
      <div className="TodoList" style={{ color: "blue" }}>
        <h2 onClick={() => this.handleTitleClick()}>{title}</h2>
        <ul>
          {items.map(({ name, completed }, index) => {
            return (
              <li key={`todo-item-${index}`}>
                <input type="checkbox" checked={completed} />
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
