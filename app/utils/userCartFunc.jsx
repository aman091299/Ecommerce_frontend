
import { addFullCartItems } from "../store/cartSlice";
import { addUser } from "../store/userSlice";
import { BASE_URL } from "./constants";
export const getALLCartItems=async (dispatch)=>{
  try{
  
    const res=await fetch(BASE_URL+"/cart/viewAllCartItems", {credentials: 'include'});
    const data=await res.json();
    if(data?.data?.length===0){
       dispatch(addFullCartItems([]));
    }
    else{

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
  if(!res.ok){
   return  dispatch(addUser(null));
  }
  const data=await res.json();
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

export const mergeCart=async(dispatch)=>{
  try{
    console.log("inside merge")
    const res=await fetch(BASE_URL+"/cart/merge",{
    method:"Post",
    credentials:'include',
    headers: {
        "Content-Type": "application/json", // ✅ Tells server this is JSON
      },
      body: JSON.stringify({}), // ✅ Empty object as JSON
  })
   
  const data=await res.json();
     if(data.success){
      return  dispatch(addFullCartItems(data?.data));
  }
  }
  catch(err){
     console.log("error merge cart data while login",err);
  }
  

}