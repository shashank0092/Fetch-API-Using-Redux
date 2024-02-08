import {configureStore} from "@reduxjs/toolkit"
import NumberSlice from "./slice/NumberSlice"
import todoReducer from "../redux/slice/todo.js"

export const store=configureStore({
    reducer:{
        todo:todoReducer
    },
    devTools:true
})