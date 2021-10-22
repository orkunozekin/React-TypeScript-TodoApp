import React, { MouseEventHandler } from 'react'
import classes from './TodoItem.module.css'
import Todo from '../../models/todo'

interface Props {
  text: string,
  onRemoveTodo: () => void
}

const TodoItem: React.FC<Props> = props => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
  )
}

export default TodoItem