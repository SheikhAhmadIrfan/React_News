import { configureStore } from "@reduxjs/toolkit";
import { Homeslice } from "../slices/Homeslice";

const store=configureStore({
    reducer:{
        Homeslice:Homeslice.reducer
    }
})

export default store;