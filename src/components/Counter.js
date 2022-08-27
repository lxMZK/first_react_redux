import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counterSlice'

export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [input, setInput] = useState(0)

    const byAmountSubmit = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(input)))
    }

    return (
        <div>
            <h1>Counter</h1>
            <h2>
                {count}
            </h2>
            <button onClick={() => dispatch(increment())}>
                increment
            </button>
            <button onClick={() => dispatch(decrement())}>
                decrement
            </button>
            <form onSubmit={(e) => byAmountSubmit(e)}>
                <input type='number' onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}