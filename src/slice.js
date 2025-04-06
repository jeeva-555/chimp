import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice(
    {
        initialState:[],
        name:"cart",
        reducers:{
            addtocart(state,action){
                
            }
        }
    }
)

export const {addtocart} =slice.actions;

export default slice.reducer;