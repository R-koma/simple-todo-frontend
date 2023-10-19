import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoList from "../components/TodoList";
import { Link } from "react-router-dom";

function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function fetchTodos() {
      const response = await axios.get("http://localhost:3001/todos");
      setTodos(response.data);
    }
    fetchTodos();
  }, []);

  const addTodo = async () => {
    const response = await axios.post("http://localhost:3001/todos", { title });
    setTodos([...todos, response.data]);
  };

  const completeTodo = async (id) => {
    await axios.put(`http://localhost:3001/todos/${id}/complete`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const todoDeleteButton = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <div>
      <h1>Todo Page</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <TodoList
        todos={todos}
        onComplete={completeTodo}
        onDelete={todoDeleteButton}
      />
      <Link to="/review">
        <h3>Reviewページを見る</h3>
      </Link>
    </div>
  );
}

export default TodoPage;
