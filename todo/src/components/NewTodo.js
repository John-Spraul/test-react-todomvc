import React from 'react';

class NewTodo extends React.Component {
  state = {
    newTodo: ''
  }

  handleChange = (event) => {
    this.setState({ newTodo: String(event.target.value) });
  }

  addTodo = (event) => {
    const newTodo = '' + this.state.newTodo.trim();
    event.preventDefault();
    if (newTodo.length) {
      this.setState({ newTodo: '' });
      this.props.addTodo(newTodo);
    }
  }

  render() {
    return (
      <form onSubmit={(event) => {this.addTodo(event)}}>
        <input placeholder="Add New Todo Item" type="text" autoFocus onChange={(event) => {this.handleChange(event)}}/>
        <button type="submit">+</button>
      </form>
    );
  }
}

export default NewTodo;
