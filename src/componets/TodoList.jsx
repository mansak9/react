import React from "react";

class TodoList extends React.Component{

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    console.log('componentDidMount')
  }

  render() {
    const { title, items } = this.props;

    return(
      <div className="Todos" style={{color: "blue"}}>
        <h2>{title}</h2>
        <ul>
          {items.map(({name, completed}, index) => {
            return <li key={`todo-item-${index}`}><input type="checkbox" checked={completed}/>{name}</li>
          })}

        </ul>
      </div>
    );
  }

};

export default TodoList;