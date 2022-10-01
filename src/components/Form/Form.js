import React from "react";
import PropTypes from "prop-types";

import { FaPlus } from "react-icons/fa";

import "./Form.scss";

function Form({ handleSubmit, handleChange, newTask, openfield }) {
  return (
    <form
      action="#"
      onSubmit={handleSubmit}
      className={`form ${openfield ? "open" : ""}`}
    >
      <input
        value={newTask}
        onChange={handleChange}
        placeholder="What is your new Task?"
        type="text"
      />
      <button type="submit">
        <FaPlus /> Add New Task
      </button>
    </form>
  );
}

export default Form;

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
  openfield: PropTypes.bool.isRequired,
};
