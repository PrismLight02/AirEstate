import {createSlice} from "@reduxjs/toolkit";



const initialState = {
    price: ""
}

export const priceSlice = createSlice({
    name: "priceFilter",
    initialState,
    reducers: {
        setPrice: (state, action) => {
            state.price = action.payload
        }
    }
})

export const {setPrice} = priceSlice.actions

export default priceSlice.reducer
