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
     height={180} width={180} 
    alt="Thank you gif"
      unoptimized
    />
    <Image src="https://cambaytiger.com/plixlifefc/assets/ThankYouTick.svg"
    height={72} width={72} 
    alt="Thank you tick"
    />
    <div className="font-semibold text-4xl">Thank You</div>
    <div className="font-semibold text-2xl" >Your order placed successfully.</div>
    <div className=" text-gray-400">You will receive order updates on your WhatsApp shortly.</div>
    <div>
      <div className="font-semibold">Order Number 44965</div>
    </div>
    <div className="flex gap-4">
      <div className="border-1 border-orange-600 text-orange-600 font-bold px-4 py-2 rounded-lg text-lg cursor-pointer">Past orders</div>
      <div className="border-1 border-orange-600 text-orange-600 font-bold px-4 py-2 rounded-lg text-lg cursor-pointer">Track my orders</div>

    </div>
    </div>
  )
}

export default CartUpdate