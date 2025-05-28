
import { addFullCartItems } from "../store/cartSlice";
import { addUser } from "../store/userSlice";
import { BASE_URL } from "./constants";
export const getALLCartItems=async (dispatch)=>{
  try{
  
    console.log("inside get all cart")
    const res=await fetch(BASE_URL+"/cart/viewAllCartItems", {credentials: 'include'});
    console.log("res",res);
    const data=await res.json();
    console.log("data inside getAll cart items",data)
    if(data?.data?.length===0){
       dispatch(addFullCartItems([]));
    }
    else{
         console.log("data  inside else",data?.data)
          dispatch(addFullCartItems(data?.data));
    }
  }
  catch(err){
     console.log(
      "Error in spotLightContainer page while getting Cart data : ",
      err
    );
 
  }
}

export const getUserData=async (dispatch)=>{
try {
  
    const res=await fetch(BASE_URL+"/profile/view",
    {
      credentials:'include',
    }
  )
  console.log("res1",res)
  if(!res.ok){
   return  dispatch(addUser(null));
  }
  console.log("res2",res)
  const data=await res.json();
  console.log("userdata",data)
  if(data.success){
    return  dispatch(addUser(data.data));
  }
} catch (error) {
   console.log(
      "Error in spotLightContainer page while getting user data : ",
      error
    );
 
}
 
}