import React, { useState } from "react";
import "./App.css";

import Input from "./components/Input";
import Button from "./components/Button";
import Switcher from "./components/Switcher";
import TodoItem from "./components/TodoItem";
import Clear from "./components/Clear";
function App() {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [allTodos, setAllTodos] = useState([]);

  const handleAddNewTodo = () => {
    if (newDescription && newTodoTitle) {
      const date = new Date();
      let newTodoObj = {
        id: date.getMilliseconds(),
        title: newTodoTitle,
        description: newDescription,
      };

      let updatedTodoArr = [...allTodos];
      updatedTodoArr.push(newTodoObj);

      setAllTodos(updatedTodoArr);

      setNewTodoTitle("");
      setNewDescription("");
    }
  };

  const handleDeleteTodo = (id) => {
    setAllTodos(allTodos.filter((item, index) => item.id !== id));
  };

  const handleClear = () => {
    setAllTodos([]);
  };
  return (
    <div className="App">
      <h1>My Todos</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <Input
            value={newTodoTitle}
            setValue={setNewTodoTitle}
            name={"Title"}
            description={"What's the title of your To Do?"}
          />
          <Input
            value={newDescription}
            setValue={setNewDescription}
            name={"Description"}
            description={"What's the description of your To Do?"}
          />
          <Button onCLick={handleAddNewTodo} />
        </div>
        <div className="clear-wrapper">
          <Clear handleClear={handleClear} />
          <Switcher />
        </div>
        <div className="todo-list">
          {allTodos.map((item, index) => (
            <TodoItem
              handleDeleteTodo={handleDeleteTodo}
              id={item.id}
              todoTitle={item.title}
              todoDescription={item.description}
            />
          ))}
          {/* <TodoItem title="Task2" description="to do homework2" /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
