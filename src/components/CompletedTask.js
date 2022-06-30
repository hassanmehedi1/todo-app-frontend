import React, { useContext, useEffect, useRef, useState } from "react";
import todoContext from "../context/todoContext";

const CompletedTask = () => {
   const context = useContext(todoContext);
   const {todos, getCompletedTodos } = context;

   useEffect(() => {
     getCompletedTodos();
   }, []);

    const ref = useRef(null);
    const refClose = useRef(null);
    const [todo, setTodo] = useState({
      id: "",
      etitle: "",
      etask: "",
      eisComplete: "",
    });

    const onChange = (e) => {
      setTodo({ ...todo, [e.target.name]: e.target.value });
    };

  return (
    <>
      <div className="container">
        <div className="display-4 text-success text-center ">
          Completed Todos
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Task's</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => {
              return (
                <tr key={todo._id}>
                  <td>{todo.title}</td>
                  <td>{todo.task}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CompletedTask;
