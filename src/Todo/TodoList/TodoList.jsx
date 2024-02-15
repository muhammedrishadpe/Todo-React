import React, { useEffect, useState } from "react";
import "./TodoList.css";
import TodoEdit from "../TodoEdit/TodoEdit";
export const TodoList = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const [todosValues, setTodosValus] = useState([]);

  const [addInput, setAddInput] = useState("");

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setTodosValus(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todosValues));
  }, [todosValues]);

  //Add
  const addItem = (newTodo) => {
    setTodosValus((prevItems) => [...prevItems, newTodo]);
  };
  const onChangeValue = (event) => {
    setAddInput(event.target.value);
  };

  //Edit
  const onEdit = (index) => {
    setClickedIndex(index);
  };

  const handleEdit = (index, newValue) => {
    const updatedTodos = todosValues.map((todo, i) =>
      i === index ? newValue : todo
    );
    setTodosValus(updatedTodos);
    localStorage.setItem("items", JSON.stringify(updatedTodos));
    setClickedIndex(null);
  };

  //Delete
  const onDelete = (index) => {
    const updatedTodos = todosValues.filter((_, i) => i !== index);
    setTodosValus(updatedTodos);
    localStorage.setItem("items", JSON.stringify(updatedTodos));
  };

  return (
    <div className="todo-list-container">
      <div className="todo-add-container">
        <input
          type="text"
          value={addInput}
          onChange={onChangeValue}
          placeholder="New Todo"
        />
        <button onClick={() => addItem(addInput)}>Add Item</button>
      </div>

      {/* Todo List */}

      {todosValues.map((data, index) => (
        <div key={index} className="">
          {clickedIndex === index ? (
            <TodoEdit
              onCancel={() => setClickedIndex(null)}
              value={data}
              onSave={(newValue) => handleEdit(index, newValue)}
            />
          ) : (
            <div className="todo-list">
              <div className="p-container">
                <p>{data}</p>
              </div>
              <div id="buttons">
                <button onClick={() => onEdit(index)}>
                  <img
                    width="25px"
                    height="25px"
                    style={{ filter: "invert(100%)" }}
                    src="../src/assets/img/edit.png"
                    alt="Edit"
                  />
                </button>
                <button onClick={() => onDelete(index)}>
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
        </div>
      ))}
    </div>
  );
};
