import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoList from "../components/TodoList";
import Topbar from "../components/topbar/Topbar";
import "./TodoPage.css";

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

  const hanldeSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:3001/todos", { title });
    setTodos([...todos, response.data]);
    window.location.reload();
  };

  // const addTodo = async () => {
  //   const response = await axios.post("http://localhost:3001/todos", { title });
  //   setTodos([...todos, response.data]);
  // };

  const completeTodo = async (id) => {
    await axios.put(`http://localhost:3001/todos/${id}/complete`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const todoDeleteButton = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <>
      <Topbar titleCenter="TODO" titleRight="Review Page" linkRight="/review" />
      <div className="todoPage">
        <div className="inputWrapper">
          <input
            className="taskInput"
            type="text"
            value={title}
            placeholder="Add Task"
            onChange={(e) => setTitle(e.target.value)}
          />
          <form
            className="taskInputButton"
            type="submit"
            onSubmit={(e) => hanldeSubmit(e)}
          >
            <button className="addTaskInputButton">Add</button>
          </form>
        </div>
        <TodoList
          todos={todos}
          onComplete={completeTodo}
          onDelete={todoDeleteButton}
        />
      </div>
    </>
  );
}

export default TodoPage;
