import React from 'react';

const TodoList = (props) => {
  let counter = props.todos.length;
  
  return (
    <ul>
      {/* props.todos will come in as an array of objects w/ .text & .completed */}
      {props.todos.map((todo, index) => {
        return (
          <li key={counter++}>
            <input type="checkbox"/>
            <span>{todo.text}</span>
            <button>X</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
