import React from "react";

const Todos = (props) => {
  console.log('----->', props);

  return (
    <div className="Todos" style={{color: "blue"}}>
      <h2>{props.title}</h2>
      <ul>
       {/* <li><input type="checkbox" checked/>{props.items[0]}</li>
        <li><input type="checkbox"/>{props.items[1]}</li>
        <li><input type="checkbox"/>{props.items[2]}</li>
        <li><input type="checkbox"/>{props.items[3]}</li>
        <li><input type="checkbox"/>{props.items[4]}</li>
        <li><input type="checkbox"/>{props.items[5]}</li>*/}


        {props.items.map((item, index) =>{
            return <li key={index}><input type="checkbox" checked={item.completed}/>{item.name}</li>
        })}

      </ul>
    </div>
  );

};

export default Todos;