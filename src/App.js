import React, { useState } from 'react';
import './App.css';
import Todo from './Todo.js'
import TodoForm from './TodoForm.js'

function App() {
    
  const [todos, setTodos] = useState([
    { 
      text: "Learn about react",
      isCompleted: false
    },
    {
       text: "Meet friend for lunch",
       isCompleted: false
    },
    {
       text: "Build really cool todo app",
       isCompleted: false 
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos)
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1> My Todo List</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

  export default App;
