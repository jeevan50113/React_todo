import React from "react";

export const Itams = ({ todo, onDelete }) => {
  return (
    <div>
      <p>
        {todo.no} {todo.title}
      </p>
      <button className="btn btn-danger" onClick={() => onDelete(todo)}>
        {" "}
        Delete
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn btn-success"> Completed</button>
    </div>
  );
};
