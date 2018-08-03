import React from 'react';

import NewTodo from '../components/NewTodo';
import TodoList from '../components/TodoList';

import '../styles/app.css';

class App extends React.Component {
  state = {
    todosArr = [],
  }

  render() {
    const itemsLeft = this.state.todosArr.length;


    return (
      <div className="app_container">
        <div>
          <p>To-Do</p>
        </div>
        <NewTodo />
        <span><strong>{itemsLeft}</strong> item{itemsLeft === 1 ? '' : 's'} left</span>
        {(todosArr.length !== 0) && <TodoList />}
      </div>
    );
  }
}

export default App;
