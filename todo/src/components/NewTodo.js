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
      <form className="box" onSubmit={(event) => {this.addTodo(event)}}>
        <input className="newTodo__input" placeholder="Add New Todo Item" type="text" value={this.state.newTodo} autoFocus onChange={(event) => {this.handleChange(event)}} />
        <button className="newTodo__button" type="submit">+</button>
      </form>
    );
  }
}

export default NewTodo;
