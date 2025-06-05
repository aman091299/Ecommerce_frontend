import { useSelector, useDispatch } from "react-redux";
import { setIsShowCartModal, addItemsInAddToCart } from "../store/cartSlice";
import { useEffect, useRef, useState } from "react";
import { createCart } from "../utils/constants";
import SmallLoader from "./SmallLoader";
import { setLoginPage } from "../store/loginSlice";
import { useRouter } from "next/navigation";

const CartModal = () => {
  console.log("inside cart modal")
  const [isClient, setIsClient] = useState(false);
  const [loading,setLoading]=useState(null)
  const [disableDelete,setDisableDelete]=useState(null);
    console.log("inside cart modal disableDelete",disableDelete)

    const dropDownRef = useRef(null);
  const dispatch = useDispatch();
  const router=useRouter();

  const showCartModal = useSelector((store) => store.cart.isShowCartModal);
  const user=useSelector((store)=>store.user);
  const cartItems = useSelector((store) => store.cart.cartItems);
  
 const totalSum= cartItems?.reduce((acc,item)=>(  acc +item.itemQuantity*item.price),0) || 0;
 

  useEffect(() => {
    if (showCartModal) {
      setIsClient(true);
      document.body.style.overflow = "hidden";
    }

    document.addEventListener("mousedown", clickOutsideCartModal);
    return () => {
      document.removeEventListener("mousedown", clickOutsideCartModal);
      document.body.style.overflow = "auto";
    };
  }, [showCartModal]);

useEffect(()=>{
setDisableDelete(null);
},[cartItems])

   const handleCartUpdate =async (type,quantityInCart,name,price,_id) => {
    let newQuantity=quantityInCart;
          
       if (type === "add") {
      newQuantity +=1;
    }
    if (type === 'remove' && quantityInCart <= 0) return;
    if (quantityInCart > 1 &&  type === "remove") {
                 newQuantity -=1;
    }
     if (newQuantity < 0) newQuantity = 0
     if(type==='delete'){
      newQuantity=0;
     }
     if(type !== 'delete'){
     setLoading(_id);
     }

    const data=await createCart(_id,newQuantity);

    setLoading(null);
    
    if(data){
        dispatch(
        addItemsInAddToCart({
          itemQuantity: newQuantity,
          name: name,
          price: price,
          _id: _id,
        })
      );
         }
    }
   



  const handleCartModal = () => {
    dispatch(setIsShowCartModal(false));
  };


  const clickOutsideCartModal = (event) => {
    if (
      dropDownRef.current !== null &&
      !dropDownRef.current.contains(event.target)
    )
      dispatch(setIsShowCartModal(false));
  };

  return (
    <div>
      <div
        className={`fixed inset-0 z-[999] bg-white/30 transition-opacity duration-300 ease-in-out ${
          showCartModal
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          ref={dropDownRef}
          className={`w-120  bg-white shadow-lg z-[1000] fixed right-0 top-0 rounded transform transition-transform duration-300 ease-in-out 
      ${showCartModal ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-between bg-black py-4 px-4">
            <div className="font-semibold text-xl text-[#feffed]">
              Shopping Cart
            </div>
            <div
              className="text-orange-600 font-semibold text-xl"
              onClick={handleCartModal}
            >
              X
            </div>
          </div>
          <div
            className={
               (!cartItems||cartItems?.length === 0 ?"":
              "overflow-auto ")+ (isClient ? "max-h-[calc(100vh-3rem)]" : "")
            }
          >
            {!cartItems||cartItems?.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-screen">
                <svg
                  width="5rem"
                  height="5rem"
                  viewBox="0 0 94 104"
                  fill="none"
                  margin="auto"
                >
                  <path
                    d="M43.14 65.492a3.37 3.37 0 006.702-.692L48.29 49.766a3.369 3.369 0 10-6.702.693l1.553 15.033zM64.224 68.498a3.37 3.37 0 003.697-3.005l1.554-15.034a3.368 3.368 0 10-6.702-.693L61.219 64.8a3.369 3.369 0 003.005 3.698zM38.138 83.141c-5.75 0-10.428 4.678-10.428 10.429S32.388 104 38.138 104c5.75 0 10.429-4.679 10.429-10.43 0-5.75-4.679-10.429-10.429-10.429zm0 14.121a3.696 3.696 0 01-3.69-3.693 3.694 3.694 0 013.69-3.69 3.695 3.695 0 013.69 3.69 3.696 3.696 0 01-3.69 3.693zM72.925 83.141c-5.75 0-10.429 4.678-10.429 10.429S67.174 104 72.925 104c5.75 0 10.43-4.679 10.43-10.43 0-5.75-4.68-10.429-10.43-10.429zm0 14.121a3.696 3.696 0 01-3.69-3.693 3.695 3.695 0 013.69-3.69 3.695 3.695 0 013.691 3.69 3.696 3.696 0 01-3.691 3.693z"
                    fill="#2B364B"
                  ></path>
                  <path
                    d="M93.076 35.523a3.368 3.368 0 00-2.665-1.309H23.258l-2.82-10.844a3.37 3.37 0 00-3.261-2.52H3.369a3.369 3.369 0 000 6.737h11.203l2.797 10.757c.014.06.03.12.047.178l10.402 40a3.37 3.37 0 003.26 2.52h48.907a3.37 3.37 0 003.26-2.52L93.673 38.43a3.37 3.37 0 00-.596-2.908zM77.38 74.306H33.684L25.01 40.953h61.044L77.38 74.306zM42.305 23.74a3.36 3.36 0 002.382.987 3.369 3.369 0 002.382-5.752L36.473 8.385a3.37 3.37 0 00-4.763 4.765l10.595 10.59zM66.39 24.726a3.36 3.36 0 002.384-.988l10.58-10.589a3.369 3.369 0 10-4.767-4.762l-10.58 10.59a3.37 3.37 0 002.383 5.75zM55.535 21.701h.001a3.37 3.37 0 003.369-3.368l.004-14.963A3.37 3.37 0 0055.54 0h-.001a3.37 3.37 0 00-3.37 3.368l-.003 14.963a3.37 3.37 0 003.368 3.37z"
                    fill="#2B364B"
                  ></path>
                </svg>
                <div className="text-[#282c3f]">
                  Your Shopping Cart is Empty!
                </div>
              </div>
            ) : (
              cartItems?.map((item) => (
                <div className="px-4 py-6 " key={item._id}>
                  <div className={" shadow-lg px-4 border-1 border-[#ececec] rounded  " + (disableDelete===item._id ? " opacity-35 ":" opacity-100 ")}
                  disabled={disableDelete===item._id}>
                    <div className="flex justify-between mt-4">
                      <div className="text-black  font-semibold text-sm">
                        {item.name}
                      </div>
                      <div
                        className="px-4 cursor-pointer"
                      onClick={()=>{
                        setDisableDelete(item._id)
                        handleCartUpdate('delete',item.itemQuantity,item.name,item.price,item._id)}}

                      >
                        <svg
                          width="14"
                          height="17"
                          viewBox="0 0 14 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.5 2.93423H10.9062L9.84375 1.19165C9.59375 0.787118 9.03125 0.444824 8.5625 0.444824H5.40625C4.9375 0.444824 4.375 0.787118 4.125 1.19165L3.0625 2.93423H0.5C0.21875 2.93423 0 3.18317 0 3.43211V3.92999C0 4.21005 0.21875 4.42788 0.5 4.42788H1L1.65625 14.9767C1.6875 15.7547 2.375 16.377 3.15625 16.377H10.8125C11.5938 16.377 12.2812 15.7547 12.3125 14.9767L13 4.42788H13.5C13.75 4.42788 14 4.21005 14 3.92999V3.43211C14 3.18317 13.75 2.93423 13.5 2.93423ZM5.40625 1.93847H8.5625L9.15625 2.93423H4.8125L5.40625 1.93847ZM10.8125 14.8834H3.15625L2.5 4.42788H11.4688L10.8125 14.8834Z"
                            fill="#BEBEBE"
                          ></path>
                        </svg>
                      </div>
                    </div>

                    <div className="flex mt-4  justify-between items-center py-4">
                      <div className="bg-blue-100 text-blue-400 text-sm px-1 flex items-center">
                        Combo of {item?.combo ? item?.combo : "3"}
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className="ml-2  text-[12px] text-[#a9a9a9] line-through"
                          style={{ textDecorationThickness: "1px" }}
                        >
                          ₹{item.actualPrice}.00
                        </span>
                        <span className="font-bold text-[14px]">
                          ₹{item.price}.00
                        </span>
                      </div>

                      <div className="flex items-center gap-4 rounded border-1 border-[#e7e7e7] px-1  ">
                        <button
                          className={
                            "text-2xl " +
                            (item.itemQuantity == "1"
                              ? "text-[#dedede]"
                              : "text-orange-600 cursor-pointer")
                          }
                          disabled={item.itemQuantity=='1'}
                      onClick={()=>handleCartUpdate('remove',item.itemQuantity,item.name,item.price,item._id)}
                        >
                          -
                        </button>
                        <div>{loading===item._id?<SmallLoader/>:item.itemQuantity}</div>
                        <button
                          className=" text-orange-600 text-xl cursor-pointer"
                        onClick={()=>handleCartUpdate('add',item.itemQuantity,item.name,item.price,item._id)}

                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
            <div className="flex py-4 justify-between">
            { !cartItems||cartItems?.length === 0  ? <div></div>:
               <div className="text-[##282c3f] mx-6 text-lg font-semibold py-2">
               Total : ₹{totalSum}.00 
            </div>
           
            }
            <div className="rounded py-2 text-lg font-semibold bg-orange-600 mr-4 text-white cursor-pointer">
            {!cartItems||cartItems?.length === 0 ?<div></div>:!user ?
               <div className="px-2" onClick={()=>{dispatch(setLoginPage(true))
                                                                                                                               handleCartModal()}}>
             PROCEED TO LOGIN
            </div>
            :<div className="flex-1 text-lg px-2 " onClick={()=>{
              dispatch(setIsShowCartModal(false));
              router.push('/checkout/address')}}>
            PROCEED TO CHECKOUT
            </div>
            }
            </div>
           
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
