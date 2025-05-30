import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
      cartItems:[],
      isShowCartModal:false,
    },
    reducers:{
        addItemsInAddToCart:(state,action)=>{
            console.log("inside cart slice ",action.payload)
          const index=state.cartItems.findIndex((item)=>(item._id === action.payload._id) );
         if(index !==-1 && action.payload.itemQuantity===0) {
        state.cartItems.splice(index,1);

         }
        else if(index !==-1){
          state.cartItems[index].itemQuantity=action.payload.itemQuantity;
        }else{
          state.cartItems.push(action.payload);
        }        
        },
        setIsShowCartModal:(state,action)=>{
           state.isShowCartModal=action.payload;
        },
        addFullCartItems:(state,action)=>{
              state.cartItems=action.payload;
        }
       
      
    }
})


export const {addItemsInAddToCart,removeItemsFromAddToCart,setIsShowCartModal, addFullCartItems}=cartSlice.actions;

export default cartSlice.reducer;
