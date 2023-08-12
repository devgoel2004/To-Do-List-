import React from "react";

const TodoList = (props) => {
  return (
    <>
      <li>
        <button
          className="btn"
          onClick={() => {
            props.onSelect(props.id);
          }}>
          X
        </button>
        {props.text}
      </li>
    </>
  );
};

export default TodoList;
