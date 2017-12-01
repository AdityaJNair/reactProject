import React, { Component } from 'react';
import ToDoEntry from '../../components/ToDoProject/ToDoEntry.js';
import ToDoList from '../../components/ToDoProject/ToDoList.js';

class ToDoContainer extends Component {

  render() {
    return (
      <div>
        <div>
          Hello
        </div>
        <ToDoEntry/>
        <ToDoList/>
      </div>
    )
  }
}

export default ToDoContainer;
