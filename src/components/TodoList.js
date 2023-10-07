import React from "react";

function TodoList({ todos, onComplete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          {todo.title}
          <button onClick={() => onComplete(todo._id)}>Complete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
