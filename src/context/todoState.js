import React, { useState } from "react";
import TodoContext from "./todoContext";
import { toast } from "react-toastify";

const TodoState = (props) => {
  const host = "http://localhost:5000";
  const todosInitial = [];
  const [todos, setTodo] = useState(todosInitial);

  // Add a Todo
  const addTodos = async (title, task, isComplete) => {
    // TODO: API Call
    // API Call
    const response = await fetch(`${host}/api/todo/addTodo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, task, isComplete }),
    });

    const todo = await response.json();
    setTodo(todos.concat(todo));
    toast("Todo Added");
  };

  //get all the todos

  const getTodos = async () => {
    //Api call
    const response = await fetch(`${host}/api/todo/fetchAllTodo/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setTodo(json);
  };


  //get completed todos

  const getCompletedTodos = async () => {
    //Api call
    const response = await fetch(`${host}/api/todo/fetchCompletedTodo/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setTodo(json);
  };

  //edit todo

  const editTodo = async (id, title, task, isComplete) => {
    // API Call
    const response = await fetch(`${host}/api/todo/updateTodo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, task, isComplete }),
    });
    const json = await response.json();

    let newTodos = JSON.parse(JSON.stringify(todos));
    // Logic to edit in client
    for (let index = 0; index < newTodos.length; index++) {
      const element = newTodos[index];
      if (element._id === id) {
        newTodos[index].title = title;
        newTodos[index].task = task;
        newTodos[index].isComplete = isComplete;
        break;
      }
    }
    setTodo(newTodos);
    toast("Todo Updated");
  };

  // Delete todos
  const deleteTodo = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/todo/deleteTodo/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = response.json();
    const newTodos = todos.filter((todo) => {
      return todo._id !== id;
    });
    setTodo(newTodos);
    toast("Todo Deleted");
  };


  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodos,
        getTodos,
        editTodo,
        deleteTodo,
        getCompletedTodos,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoState;
