import { useRef, useContext } from "react"
import { TodosContext } from "../../store/todos-context"
import classes from './NewTodo.module.css'

const NewTodo: React.FC = () => {

  const todosCtx = useContext(TodosContext)

  const { addTodo } = todosCtx

  const todoTextInputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredText = todoTextInputRef.current!.value

    addTodo(enteredText)
  }

  return <form onSubmit={submitHandler} className={classes.form}>
    <label htmlFor="todo-text">Todo text</label>
    <input type="text" id="todo-text" ref={todoTextInputRef} />
    <button>Add Todo</button>
  </form>
}

export default NewTodo