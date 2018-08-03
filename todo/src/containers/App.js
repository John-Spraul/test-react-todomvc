import React from 'react';

import NewTodo from '../components/NewTodo';
import TodoList from '../components/TodoList';

import '../styles/app.css';

class App extends React.Component {
  state = {
    todosArr = [],
  }

  addTodo = (newTodo) => {
    this.setState(prev => ({ todosArr: [...prev.todosArr, {text: newTodo, completed: false}] }) );
  }

  render() {
    const itemsLeft = this.state.todosArr.length;
    const todosArr = [...this.state.todosArr];

    return (
      <div className="app_container">
        <div>
          <p>To-Do</p>
        </div>
        <NewTodo addTodo={this.addTodo} />
        <span><strong>{itemsLeft}</strong> item{itemsLeft === 1 ? '' : 's'} left</span>
        {(todosArr.length !== 0) && <TodoList todos={todosArr} />}
      </div>
    );
  }
}

export default App;
