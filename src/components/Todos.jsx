import React from 'react'
import Todo from './Todo'

import style from './todos.module.css'




export default function Todos(props) {
    // console.log(props.todos)
  return (
    <section >
        {
            props.todos.map((todo)=>(
                <Todo todo={todo.todo} key={todo.id} id={todo.id} onRemoveTodo = {props.onRemoveTodo}/>
            ))
        }
    </section>
  )
}
