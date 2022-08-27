import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        add: (state, action) => {
            return {
                items: [...state.items, action.payload]
            }
        },
        removeAll: (state, action) => {
            const arr = [...state.items]
            let i = 0
            while (i < arr.length) {
                if (arr[i] === action.payload) {
                    arr.splice(i, 1)
                } else {
                    i++
                }
            }
            return {
                items: arr
            }
        },
        removeOne: (state, action) => {
            const arr = [...state.items]
            let i = arr.indexOf(action.payload)
            if (i > -1) {
                arr.splice(i, 1)
            }
            return {
                items: arr
            }
        },
        clear: () => {
            return {
                items: []
            }
        }
    }
})

export const { add, removeOne, removeAll, clear } = todoSlice.actions

export default todoSlice.reducer