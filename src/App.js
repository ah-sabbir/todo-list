import { useState } from "react";
import "./App.css";
import { ListItems } from "./component/Lists/ListItems";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
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
      {
        // if todos array is empty show this message else show list items component with todos array as props
        todos.length < 1 && todos ? (
          <h2>No todos</h2>
        ) : (
          <ul id="myUL" key={"my-todo-list"}>
            <ListItems todos={todos} removeItem={removeTodo} />{" "}
            {/* pass todos array to ListItems */}
          </ul>
        )
        // <ListItems todos={todos} /> {/* pass todos array to ListItems */}
      }
    </>
  );
}

export default App;
