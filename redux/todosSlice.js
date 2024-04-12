import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    task: '',
    completed: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addTask: (state, action)=>{
        const {task, completed} = action.payload
        state.task = task
        state.completed = completed;
    },
    }
})

export const {addTask} = userSlice.actions
export default userSlice.reducer