import React from "react";
import PropTypes from "prop-types";
import { FaEdit, FaWindowClose } from "react-icons/fa";

import "./Tasks.css";

function Tasks({ handleEdit, handleDelete, tasks }) {
  return (
    <ul className="tasks">
      {tasks.map((task, index) => (
        <li key={task}>
          {task}
          <div>
            <FaEdit
              onClick={(e) => handleEdit(e, index)}
              className="edit_task"
            />
            <FaWindowClose
              onClick={(e) => handleDelete(e, index)}
              className="delete_task"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

Tasks.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
