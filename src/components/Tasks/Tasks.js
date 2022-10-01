import React from "react";
import PropTypes from "prop-types";
import { FaEdit, FaWindowClose } from "react-icons/fa";

import "./Tasks.scss";

function Tasks({ handleEdit, handleDelete, tasks }) {
  return (
    <section className="tasks">
      {tasks.map((task, index) => (
        <div className="single_task" key={task}>
          <span>{task}</span>
          <div className="task_btns">
            <FaEdit
              onClick={(e) => handleEdit(e, index)}
              className="edit_task"
            />
            <FaWindowClose
              onClick={(e) => handleDelete(e, index)}
              className="delete_task"
            />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Tasks;

Tasks.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
