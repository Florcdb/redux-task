import {configureStore} from "@reduxjs/toolkit"
import { userSlice } from "./todosSlice.js"

export const store = configureStore(
    {  
    reducer:{
        user: userSlice.reducer
    }
    }
)