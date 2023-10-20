import React from "react";
import "./TodoList.css";

function TodoList({ todos, onComplete, onDelete }) {
  return (
    <div className="todoList">
      <ul className="todoListWrapper">
        {todos.map((todo) => (
          <li className="todoListTitle" key={todo._id}>
            <input
              className="todoCheckBox"
              type="checkbox"
              onClick={() => onComplete(todo._id)}
            />
            {todo.title}
            <button
              className="todoDeleteButton"
              onClick={() => onDelete(todo._id)}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
