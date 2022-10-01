import React from "react";
import PropTypes from "prop-types";

import { FaPlus, FaArrowDown } from "react-icons/fa";

import "./Form.scss";

function Form({ handleSubmit, handleChange, newTask, openfield, handleClose }) {
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

      <span
        className={`close_field ${openfield ? "" : "hidden"}`}
        onClick={handleClose}
      >
        <FaArrowDown />
      </span>
    </form>
  );
}

export default Form;

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
  openfield: PropTypes.bool.isRequired,
};
