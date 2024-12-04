import "./styles.css";
import { useState } from "react";

let id = 0;

const INITIAL_TASKS = [
  { id: id++, label: "Walk the dog" },
  { id: id++, label: "Water the plants" },
  { id: id++, label: "Wash the dishes" },
];

export default function TodoList() {
  const [textInput, setText] = useState("");
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const handleNewTask = () => {
    setTasks([...tasks, { id: id++, label: textInput }]);
    setText("");
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "70%",
          gap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Add your task"
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleNewTask();
            }
          }}
          value={textInput}
        />
        <div>
          <button onClick={(e) => handleNewTask()}>Submit</button>
        </div>
      </div>
      <ul>
        {tasks?.map((task) => (
          <li className="task-item" key={task.id}>
            <span>{task.label}</span>
            <button
              onClick={(e) => setTasks(tasks.filter((t) => t.id !== task.id))}
              style={{ marginLeft: "1em" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
