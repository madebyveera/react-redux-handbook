import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Entity</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <tr key={`renderKey${index}`}>
            <td>
              <label>{index + 1}</label>
            </td>
            <td>
              <Todo
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
