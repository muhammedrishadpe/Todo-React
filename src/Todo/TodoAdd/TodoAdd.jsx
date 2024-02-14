import React from 'react'
import "../TodoAdd/TodoAdd.css"
export const TodoAdd = () => {
  return (
  <div className="todo-add-container">
    <input type="text" placeholder='New Todo' />
    <button>ADD TODO</button>
  </div>
  )
}
