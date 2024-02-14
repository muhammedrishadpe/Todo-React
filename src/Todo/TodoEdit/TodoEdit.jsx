import React from "react";
import "../TodoEdit/TodoEdit.css";
const TodoEdit = ({ onCancel }) => {
  return (
    <div className="todo-edit-container">
      <input type="text" placeholder="Edit Todo" />
      <button id="save-button">SAVE</button>
      <button onClick={onCancel} id="cancel-button">
        CANCEL
      </button>
    </div>
  );
};

export default TodoEdit;
