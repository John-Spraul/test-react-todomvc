import React from 'react';

class NewTodo extends React.Component {
  state = {
    newTodo: ''
  }

  handleChange = () => {}

  render() {
    return (
      <form>
        <input type="text"/>
        <button type="submit">+</button>
      </form>
    );
  }
}

export default NewTodo;
