import React from "react";

// import { TodoAdd } from './TodoAdd/TodoAdd'
import { TodoList } from "./TodoList/TodoList";

import "../Todo/Todo.css";

export const Todo = () => {
  return (
    <div className="Todo-container">
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
};
