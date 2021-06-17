import React from 'react';
import Todolist from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Todo List
        </h1>
      </header>
      <AddTodo />
      <br />
      <Todolist />
    </div>
  );
}

export default App;
