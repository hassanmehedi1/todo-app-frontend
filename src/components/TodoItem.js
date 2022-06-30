import React, { useContext } from "react";
import todoContext from "../context/todoContext";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const TodoItem = (props) => {
  const context = useContext(todoContext);
  const { deleteTodo } = context;
  const { todo, updateTodo } = props;

  return (
    <tr>
      <td>{todo.title}</td>
      <td>{todo.task}</td>
      <td>
        <input
          type="checkbox"
          className="form-check-input"
          id="isComplete"
          checked={todo.isComplete == "true"}
          onChange={() => {
            console.log("ok");
          }}
        />
      </td>
      <td>
        <FaEdit
          
          onClick={() => {
            updateTodo(todo);
          }}
        ></FaEdit>
      </td>
      <td>
        <FaTrashAlt
          className="far fa-trash-alt mx-2"
          onClick={() => {
            deleteTodo(todo._id);
          }}
        ></FaTrashAlt>
      </td>
    </tr>
  );
};

export default TodoItem;
