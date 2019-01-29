import React from "react";

class Todos extends React.Component{

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    console.log('componentDidMount')
  }

  render() {
    const { title, items } = this.props;

    return (
      <div className="Todos" style={{color: "blue"}}>
        <h2>{title}</h2>
        <ul>
          {items.map((item, index) => {
            return <li key={index}><input type="checkbox" checked={item.completed}/>{item.name}</li>
          })}

        </ul>
      </div>
    );
  }

};

export default Todos;