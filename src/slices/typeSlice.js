import {createSlice} from "@reduxjs/toolkit";



const initialState = {
    type: ""
}

export const typeSlice = createSlice({
    name: "typeFilter",
    initialState,
    reducers: {
        setType: (state, action) => {
            state.type = action.payload
        }
    }
})

export const {setType} = typeSlice.actions

export default typeSlice.reducer
