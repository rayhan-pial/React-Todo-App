import React, { useState } from 'react'
import Todos from './Todos'
import Newtodo from './Newtodo'

import {v4 as uuidv4} from "uuid"

import style from './home.module.css'

export default function Home() {

  const [todos, settodo] =useState([]);

  const handleAddTodo=(todo)=>{
    settodo((prevTodos)=>{
      return [...prevTodos, {id: uuidv4() ,todo}];
    })
    // console.log(todos)
  }

  const handleRemoveTodo=(id)=>{
    settodo((prevtodo)=>{
      const filteredTodos = prevtodo.filter((todo)=> todo.id !== id);
      return filteredTodos;
    })
    }
    // console.log(todos)


  return (

    <div>
      <h1>Todo App</h1>
      <Newtodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo = {handleRemoveTodo}/>
    </div>
  )
}
