import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"
import loginSlice from "./loginSlice";
import userSlice from "./userSlice"

export const store=configureStore({
    reducer:{
        cart:cartSlice,
        login:loginSlice,
        user:userSlice,
    }
    ,
})