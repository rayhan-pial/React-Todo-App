import React, { useState } from 'react'

import style from './newtodo.module.css'

export default function Newtodo(props) {

    const [todo,setodo] =useState({title:"",desc:""});
    const {title,desc} = todo;

    const handleChange=(event)=>{
        const name = event.target.name
        setodo((oldtodo)=>{
            return {...oldtodo, [name]: event.target.value}
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        props.onAddTodo(todo);
        setodo({title:"",desc:""});
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Title :</label>
            <input type="text" id='title' name ='title'
            value={title} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="desc">Description :</label>
            <textarea type="text" id='desc' name ='desc'
            value={desc} onChange={handleChange}/>

        </div>
        <button type='submit'>Add todo :</button>
    </form>
  )
}
