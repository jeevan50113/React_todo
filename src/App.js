import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { Create_Todo } from "./Components/Create_Todo";
import { Fotter } from "./Components/Fotter";
import Todo from "./Components/Todo";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let init_todo = [];
  if (localStorage.getItem("todos") === null) {
    init_todo = [];
  } else {
    init_todo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("i am on Delete", todo.title, todo.no);

    setTodo(k
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, des) => {
    console.log("todo is added");
    const mytodo = {
      title: title,
      des: des,
    };
    setTodo([...todos, mytodo]); //set todos will update the new todos
  };

  //const [todos, setTodo] = useState([
  //  { no: 1, title: "complete the reactjs" },
  //  { no: 2, title: "complete the syllabus" },
  //  { no: 3, title: "complete the reactjs" },
  //]);

  const [todos, setTodo] = useState(init_todo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // this used when ever todos are added then this will update the todos list with the new todo
  }, [todos]);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Create_Todo addTodo={addTodo} />}
          />
          <Route
            path="/Add"
            exact
            render={(props) => (
              <Todo {...props} todos={todos} onDelete={onDelete} />
            )}
          />
          <Fotter />
        </Switch>
      </Router>
    </>
  );
}

export default App;
