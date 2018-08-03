import React from 'react';

const TodoList = (props) => {

  return (
    <ul>
      {/* props.todos will come in as an array of objects w/ .text & .completed */}
      {props.todos.map((todo, index) => {
        return (
          <li>
            <input type="text"/>
            <span></span>
            <button></button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
