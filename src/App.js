import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (e) => {
    setInputList(e.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br></br>
          <h1>To Do List</h1>
          <br />
          <div className="input-div">
            <input type="text" placeholder="Add a item" onChange={itemEvent} />

            <button onClick={listOfItems}>+</button>
          </div>
          <div className="list-div">
            <ul>
              {/* <li>{inputList}</li> */}
              {Items.map((itemval, index) => {
                return (
                  <TodoList
                    key={index}
                    id={index}
                    text={itemval}
                    onSelect={deleteItems}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
