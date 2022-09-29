import React, { Component } from "react";

//Form
import { FaPlus } from "react-icons/fa";

//tasks
import { FaEdit, FaWindowClose } from "react-icons/fa";

import "./Main.css";

class Main extends Component {
  state = {
    newTask: "",
    tasks: [],
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks];

    this.setState({
      tasks: [...newTasks, newTask],
    });
  };

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    let newTasks = [...tasks];
    newTasks.splice(index, 1);

    this.setState({
      tasks: [...newTasks],
    });
  };

  handleEdit = (e, index) => {};

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#" onSubmit={this.handleSubmit} className="form">
          <input value={newTask} onChange={this.handleChange} type="text" />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task, index) => (
            <li key={task}>
              {task}
              <div>
                <FaEdit
                  onClick={(e) => this.handleEdit(e, index)}
                  className="edit_task"
                />
                <FaWindowClose
                  onClick={(e) => this.handleDelete(e, index)}
                  className="delete_task"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Main;
