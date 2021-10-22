import React, { useState, useContext } from 'react'
import Todo from '../models/todo'

type TodosContextObj = {
  items: Todo[]
  addTodo: (todo: string) => void
  removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => { },
  removeTodo: (id: string) => { }
})


const TodoContextProvider: React.FC = (props) => {

  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)
    setTodos((prevState) => {
      return prevState.concat(newTodo)
    })
  }

  const removeTodoHandler = (id: string) => {
    const newArray = todos.filter(item => item.id !== id)
    setTodos(newArray)
  }

  const value: TodosContextObj = {
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    items: todos
  }

  return <TodosContext.Provider value={value}>
    {props.children}
  </TodosContext.Provider>
}

export default TodoContextProvider