import React, { useState } from "react";
import "./TodoList.css";
import TodoEdit from "../TodoEdit/TodoEdit";
export const TodoList = () => {
  const [edit, setEdit] = useState(false);

  const onEdit = () => {
    setEdit((prev) => !prev);
  };
  return (
    <div className="todo-list-container">
      {edit ? (
        <TodoEdit onCancel={onEdit} />
      ) : (
        <div className="todo-list">
          <div className="p-container">
            <p>This is a Todo</p>
          </div>
          <div id="buttons">
            <button onClick={onEdit}>
              <img
                width="25px"
                height="25px"
                style={{ filter: "invert(100%)" }}
                src="../src/assets/img/edit.png"
                alt="Edit"
              />
            </button>
            <button>
              {" "}
              <img
                width="25px"
                height="25px"
                src="../src/assets/img/delete.png"
                alt="Delete"
              />
            </button>
          </div>
        </div>
      )}

      <div className="todo-list">
        <p>This is a Todo item</p>
        <div id="buttons">
          <button>
            <img
              width="25px"
              height="25px"
              style={{ filter: "invert(100%)" }}
              src="../src/assets/img/edit.png"
              alt="Edit"
            />
          </button>
          <button>
            {" "}
            <img
              width="25px"
              height="25px"
              src="../src/assets/img/delete.png"
              alt="Delete"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
