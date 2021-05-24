import React, { useState } from "react";
import { Itams } from "./Itams";

export default function Todo(props) {
  const [v, setv] = useState([]);
  const fetch_local = () => {
    let v = localStorage.getItem("todos");
    setv(v);
  };

  let height = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className="container my-3" style={height}>
      <h3 className="text-center  my-3"> My Todo list </h3>
      {props.todos.length === 0 ? (
        <p className="text-center  my-3">No todos</p>
      ) : (
        <p className="text-center  my-3">
          {props.todos.map((todo) => {
            return (
              <>
                <Itams todo={todo} key={todo.no} onDelete={props.onDelete} />
                <hr />
              </>
            );
          })}
        </p>
      )}
      <div>
        <button onClick={fetch_local}>fetch froom local</button>
        {v}
      </div>
    </div>
  );
}
