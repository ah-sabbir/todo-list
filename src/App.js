import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  // remove item from todo list and ul
  const removeItem = (index) => {
    console.log(index);
    // const index = e.target.dataset.index;
    // setTodos(todos.splice(index, 1));
    // console.log(e.target.key);
  };

  // add todo function
  const addTodo = (e) => {
    e.preventDefault();
    inputValue !== ""
      ? setTodos([...todos, inputValue])
      : alert("input is empty"); // add todo to array
  };

  return (
    <>
      <div id="myDIV" className="header">
        <h2 className="header-2">My To Do List</h2>
        <input
          type="text"
          id="myInput"
          placeholder="Enter todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <span className="addBtn" onClick={addTodo}>
          Add
        </span>
      </div>
      {todos.length < 1 && todos ? (
        <h2>No todos</h2>
      ) : (
        <ul id="myUL" key={"my-todo-list"}>
          {todos.map((todo, index) => (
            <li key={index}>
              <span
                className="close"
                key={"todo_number" + index}
                onClick={removeItem(index)}
              >
                X
              </span>
              {todo}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
