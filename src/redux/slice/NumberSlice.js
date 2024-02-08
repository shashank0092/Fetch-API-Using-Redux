import { createSelector, createSlice } from "@reduxjs/toolkit";

const NumberSlice=createSlice({
    name:"rootNumber",
    initialState:0,
    reducers:{
        incNumber:(state,action)=>{
            return state+1
        },

    }
})

export const numberSelector=createSelector((state)=>state.numberSlice,(state)=>state)

export const {incNumber}=NumberSlice.actions
export default NumberSlice.reducer