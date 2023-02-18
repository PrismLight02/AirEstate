import { configureStore } from "@reduxjs/toolkit";
import locationSliceReducer from "./slices/locationSlice";
import priceSliceReducer from "./slices/priceSlice";
import dateSliceReducer from "./slices/dateSlice";
import typeSliceReducer from "./slices/typeSlice";

export const store = configureStore({
    reducer:{
        locationFilter : locationSliceReducer,
        priceFilter: priceSliceReducer,
        dateFilter: dateSliceReducer,
        typeFilter: typeSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
        })

})