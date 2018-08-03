import React from 'react';

import NewTodo from '../components/NewTodo';
import TodoList from '../components/TodoList';

import '../styles/app.css';

class App extends React.Component {
  state = {
    todosArr: [],
  }

  addTodo = (newTodo) => {
    this.setState(prev => ({ todosArr: [...prev.todosArr, {text: newTodo, completed: false}] }) );
  }

  removeTodo = (index) => {
    this.setState(prev => ({ todosArr: prev.todosArr.filter((elem, i) => i !== index) }) );
  }

  toggleCompleted = (index) => {
    this.setState(prev => ({ todosArr: prev.todosArr.map((elem, i) => i === index ? {text: elem.text, completed: !elem.completed} : elem) }) );
  }

  render() {
    const itemsLeft = this.state.todosArr.reduce((memo, elem) => {
      if (!elem.completed) {
        return memo + 1;
      }
      return memo;
    }, 0);
    const todosArr = [...this.state.todosArr];

    return (
      <div className="app_container">
        <div className="box box-centered">
          <p>To-Do</p>
        </div>
        <NewTodo addTodo={this.addTodo} />
        <span><strong>{itemsLeft}</strong> item{itemsLeft === 1 ? '' : 's'} left</span>
        {(todosArr.length !== 0) && <TodoList todos={todosArr} removeTodo={this.removeTodo} toggleCompleted={this.toggleCompleted} />}
      </div>
    );
  }
}

export default App;
