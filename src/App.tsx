import { useState } from 'react'
import NewTodo from './components/NewTodo/NewTodo';
import Todos from './components/Todos/Todos'
import Todo from './models/todo';
import TodoContextProvider from './store/todos-context';

function App() {


  return (
    <div className="App">
      <TodoContextProvider>
        <NewTodo />
        <Todos />
      </TodoContextProvider>
    </div>
  );
}

export default App;
