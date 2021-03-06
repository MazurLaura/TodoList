import React from "react";


const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {

  //Every time the input changes this onChange event will run.
  const inputTextHandler = (event) => {
    console.log(event.target.value);
    setInputText(event.target.value);
  };

  //Every time we click on submit button this event will run
  const submitTodoHandler = (event) => {
    event.preventDefault();
    setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}]); //How the Todos should look like.
    setInputText('');
  };

  const statusHandler = (event) => {
    setStatus(event.target.value);
  }

  return(
    <form>
      <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" /> 
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;