import React, { Component } from 'react';

class ToDoEntry extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text"/>
          <input type="submit" value="Add Todo"/>
        </form>
      </div>
    )
  }
}

export default ToDoEntry;
