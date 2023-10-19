import React from "react";

function TodoList({ todos, onComplete, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          {todo.title}
          <button onClick={() => onComplete(todo._id)}>Complete</button>
          <button onClick={() => onDelete(todo._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
