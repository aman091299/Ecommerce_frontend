'use client'
import { useEffect } from "react"
import { useSelector, useDispatch  } from "react-redux"
import { getALLCartItems } from "../utils/userCartFunc"


const CartUpdate = () => {
    const cart=useSelector(store=>store.cart.cartItems);
    const dispatch=useDispatch();

useEffect(()=>{
    console.log("inside cart update get all cart itemsuseffect")
  getALLCartItems(dispatch);
 },[cart?.length])

  return (
    <div></div>
  )
}

export default CartUpdate