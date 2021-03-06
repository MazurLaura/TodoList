import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]); //We want to get the todos in an array by filtering (all, completed, uncompleted)

  //Run once when the app starts
  useEffect(() => {
    getLocalTodos()
  }, []);

  const saveLocalTodos = React.useCallback(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);

//USE EFFECT
useEffect(() => {
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  filterHandler();
  saveLocalTodos();
}, [todos, status, saveLocalTodos])


// Save to local storage
const getLocalTodos = () => {
  if (localStorage.getItem('todos') === null) {
    localStorage.setItem('todos', JSON.stringify([]));
  } else {
    let todoLocal = JSON.parse(localStorage.getItem('todos'));
    setTodos(todoLocal);
  }
}

const handleRemove = () => {
  setTodos([]);
}

return (
  <div className="App">
    <header>
      <h1>Lili's Todo List</h1>
    </header>
    <Form
      inputText={inputText}
      todos={todos}
      setTodos={setTodos}
      setInputText={setInputText}
      setStatus={setStatus}
    />
    <TodoList
      filteredTodos={filteredTodos}
      todos={todos}
      setTodos={setTodos}
    />
    {todos.length > 0 && <button type="button" className="remove-btn" onClick={handleRemove}>Remove All</button>}
  </div>
);
}

export default App;
