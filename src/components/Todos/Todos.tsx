import { useContext } from 'react'

import TodoItem from '../TodoItem/TodoItem'
import { TodosContext } from '../../store/todos-context'
import classes from './Todos.module.css'


const Todos: React.FC = () => {

  const todosCtx = useContext(TodosContext)

  const { items, removeTodo } = todosCtx

  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem
          onRemoveTodo={removeTodo.bind(null, item.id)}
          text={item.text}
          key={item.id} />
      ))}
    </ul>
  )
}

export default Todos