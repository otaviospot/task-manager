import React, { Component } from "react";
import Header from "./Header/Header";
import Form from "./Form/Form";
import Tasks from "./Tasks/Tasks";

import "./Main.scss";

class Main extends Component {
  state = {
    newTask: "",
    tasks: [],
    index: -1,
    openfield: false,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!tasks) return;

    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;

    if (tasks === prevState.tasks) return;

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    let { openfield } = this.state;
    newTask = newTask.trim();

    if (!openfield) {
      this.setState({
        openfield: true,
      });
    } else {
      if (tasks.indexOf(newTask) !== -1 || newTask === "") return;

      const newTasks = [...tasks];

      if (index === -1) {
        this.setState({
          tasks: [...newTasks, newTask],
          newTask: "",
          openfield: false,
        });
        console.log("fechou");
      } else {
        newTasks[index] = newTask;

        this.setState({
          tasks: [...newTasks],
          index: -1,
          newTask: "",
          openfield: false,
        });
        console.log("fechou");
      }
    }
  };

  handleClose = (e) => {
    this.setState({
      openfield: false,
      newTask: "",
    });
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
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

  handleEdit = (e, index) => {
    const { tasks } = this.state;
    this.setState({
      index,
      newTask: tasks[index],
      openfield: true,
    });
  };

  render() {
    const { newTask, tasks, openfield } = this.state;

    return (
      <div className="main">
        <Header />
        <section className="list_task">
          <h2 className="task_name">My Task List ({tasks.length})</h2>
          <Tasks
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
            tasks={tasks}
          />
        </section>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTask={newTask}
          openfield={openfield}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}

export default Main;
