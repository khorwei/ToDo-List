import React, { useState } from "react";
// import ToDoList from "./ToDoList";
// import ToDo from "./ToDo";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    setUserInput(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        tyoe="text"
        onChange={handleChange}
        placeholder="Enter new task"
      />
      <button>Submit</button>
    </form>
  );
};

export default ToDoForm;
