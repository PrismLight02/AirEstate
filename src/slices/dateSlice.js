import {createSlice} from "@reduxjs/toolkit";



const initialState = {
    date: new Date()
}

export const dateSlice = createSlice({
    name: "dateFilter",
    initialState,
    reducers: {
        setDate: (state, action) => {
            state.date = action.payload
        }
    }
})

export const {setDate} = dateSlice.actions

export default dateSlice.reducer
