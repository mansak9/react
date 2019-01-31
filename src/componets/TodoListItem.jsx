import React from "react";

class TodoListItem extends React.Component {
  render() {
    const { index, name, completed } = this.props;

    return (
      <li key={`todo-item-${index}`}>
        <input
          type="checkbox"
          checked={completed}
          onChange={this.handleInputChange(index)}
        />
        {name}
      </li>
    );
  }
}

export default TodoListItem;
