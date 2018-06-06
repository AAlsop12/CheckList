import React, { Component } from 'react';
import ToDoBox from './toDoBox';
import CompletedBox from './completedBox';

export default class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="to_do_box">
          <h1 className="to_do_header">To Do List</h1>
          <ToDoBox/>
        </div>
        <div className="completed_box">
          <h1 className="completed_box_header">Finished Tasks</h1>
          <CompletedBox/>
        </div>

      </div>
    );
  }
}

