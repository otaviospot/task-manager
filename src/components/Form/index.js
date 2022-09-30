import React from "react";
import PropTypes from "prop-types";

import { FaPlus } from "react-icons/fa";

import "./Form.css";

function Form({ handleSubmit, handleChange, newTask }) {
  return (
    <form action="#" onSubmit={handleSubmit} className="form">
      <input value={newTask} onChange={handleChange} type="text" />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

export default Form;

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};
