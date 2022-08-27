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
            let i = 0
            while (i < state.items.length) {
                if (state.items[i] === action.payload) {
                    state.items.splice(i, 1)
                } else {
                    i++
                }
            }
        },
        removeOne: (state, action) => {
            let i = state.items.indexOf(action.payload)
            if (i > -1) {
                state.items.splice(i, 1)
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