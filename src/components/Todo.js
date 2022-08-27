import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeOne, removeAll, add, clear } from './features/todoSlice'

export default function Todo() {
    const items = useSelector((state) => state.todo.items)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const list = items.map((item,i)=><li key={i}>{item}</li>)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <h1>To-do List</h1>
            <ul>
                {list}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={e => setInput(e.target.value)} />
                <button onClick={()=>dispatch(add(input))}>Add</button>
                <button onClick={()=>dispatch(removeOne(input))}>Remove One</button>
                <button onClick={()=>dispatch(removeAll(input))}>Remove All</button>
                <button id='clear' onClick={()=>dispatch(clear())}>Clear</button>
            </form>
        </div>
    )
}