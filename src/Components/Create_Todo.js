import React, { useState } from "react";

export const Create_Todo = (props) => {
  const [data, setdata] = useState("");
  const [des, setdes] = useState("");

  const submit = (e) => {
    // this function will not allow the page to reload because reload is not required
    e.preventDefault();
    if (!data || !des) {
      alert("data or description are empty");
    } else {
      props.addTodo(data, des);
    }
  };

  return (
    <div className="container">
      <h3 className="text-center">ADD TODOS</h3>

      <form onSubmit={submit}>
        <div class="mb-3">
          <label class="form-label">Todo data</label>
          <input
            type="text"
            value={data}
            onChange={(e) => {
              setdata(e.target.value);
            }}
            class="form-control"
            //id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label htmlfor="exampleInputPassword1" class="form-label">
            Todo description
          </label>
          <input
            type="text"
            //values are given the text field to accesss the data in them
            value={des}
            // on change is to update the value in the text field to #if not change or updated they will remain same AND no input will be taken
            onChange={(e) => {
              setdes(e.target.value);
            }}
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-sm btn-primary">
          Create
        </button>
      </form>
    </div>
  );
};
