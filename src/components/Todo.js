import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {

  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id)) //The filter goes through all of the listed todos, and if the element id matches the todo id, then it's gonna get rid of it. So we try to find an element that matches with whatever we clicked on. 
  };

  const completeHandler = () => {
    setTodos(todos.map((element) => {
      if(element.id === todo.id) {
        return {
          ...element, completed: !element.completed
        }
      }
      return element;
    })
  )}

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
};

export default Todo;