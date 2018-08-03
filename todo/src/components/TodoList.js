import React from 'react';

const TodoList = (props) => {
  let counter = props.todos.length;
  
  return (
    <ul>
      {/* props.todos will come in as an array of objects w/ .text & .completed */}
      {props.todos.map((todo, index) => {
        return (
          <li className="todo-item" key={counter++}>
            <input type="checkbox" onChange={() => {props.toggleCompleted(index)}} checked={todo.completed} />
            <span className={todo.completed ? "item-completed" : null}>{todo.text}</span>
            <button className="button__remove-todo" onClick={() => {props.removeTodo(index)}}>X</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
