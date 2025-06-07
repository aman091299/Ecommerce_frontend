'use client'
import { useEffect } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { getALLCartItems } from "../utils/userCartFunc";
import Image from 'next/image';

const CartUpdate = () => {
  console.log("inside order placed")
    const cart=useSelector(store=>store.cart.cartItems);
    const dispatch=useDispatch();

useEffect(()=>{
    console.log("inside cart update get all cart itemsuseffect");
  getALLCartItems(dispatch);
 },[cart?.length])

  return (
    <div className="flex items-center flex-col gap-6">
      <Image src="https://cambaytigerstage-media.farziengineer.co/hosted/Thank_You_page_GIF-f67bbb97a2b3.gif"
     height={285} width={285} 
    alt="Thank you gif"
      unoptimized
    />
    <Image src="https://cambaytiger.com/plixlifefc/assets/ThankYouTick.svg"
    height={72} width={72} 
    alt="Thank you tick"
    />
    <div>Thank You</div>
    <div>Your order placed successfully.</div>
    <div>You will receive order updates on your WhatsApp shortly.</div>
    <div>
      <div>Order Number 44965</div>
    </div>
    </div>
  )
}

export default CartUpdate