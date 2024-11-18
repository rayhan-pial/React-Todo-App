import React from 'react'

import style from './todo.module.css'

export default function Todo(props) {
    // console.log(props.todo)
    const {title, desc} = props.todo;
    const {id} = props;

    const handlethis=(id)=>{
        props.onRemoveTodo(id);
    }

  return (
    <article>
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        <div>
            <button onClick={() => {handlethis(id) }}>
                <i className='fa fa-trash fa-2x'></i>
            </button>
        </div>
    </article>
  )
}
