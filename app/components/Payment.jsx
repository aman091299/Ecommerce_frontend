import {useState,useEffect} from 'react'
import { BASE_URL } from '../utils/constants';
import { useRouter } from 'next/navigation';
import Loader from './Loader';

const Payment = () => {
    const [type,setType]=useState('pay-online');
    const [loading,setLoading]=useState(true);
    const router=useRouter();

    useEffect(() => {
    getAddress();
    }, []);

    const getAddress = async () => {
     setLoading(true);
    try {
        const res = await fetch(BASE_URL + "/address/default", {
        credentials: "include",
        });
        const data = await res.json();
         if(!data?.data ){
              setLoading(true);
          router.push("/checkout/address");
          return;
         }
        
          setLoading(false);
         

    } catch (error) {
        console.log("Error while getting the address", error);
         setLoading(false);
    } 
    };
    if (loading) {
        return (
          <div className="py-40 relative">
            <Loader />
          </div>
        );
      }

    const placeOrderhandler=async(type)=>{
      try{   
        console.log("placing order .....",type)
            if(type==='pay-online'){
               const res= await fetch(BASE_URL + '/payment/create/order',{
                method:'Post',
                headers:{
                'Content-Type':'application/json'
                },

                credentials:'include',
                body:JSON.stringify({type})
            });
            const data=await res.json();
            const {amount,currency,orderId,notes,address}=data?.data;
            console.log("data....",data.data,"amount,,,,,,,",amount)
            var options = {
                "key": data?.key, // Enter the Key ID generated from the Dashboard
                "amount":amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": currency,
                "name": "Cambay Tiger Corp",
                "description": "Test Transaction",
                "image": "https://cdn.razorpay.com/logos/FKjVLQVqlhHPF2_medium.jpg",
                "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
                "prefill": {
                    "name": notes.firstName +" "+ notes.lastName,
                    "email": notes.emailId,
                  
                },
                "notes": {
                    "address": address
                },
                "theme": {
                    "color": "#3399cc"
                }
            };
            var rzp1 = new Razorpay(options);
                rzp1.open();
            }
            else {
            console.log('Place order with', type); // COD or wallet
            // You can call another API for COD or wallet payment
          }

        }
        catch(error){
            console.log("Error while payment ",error);
        }
      
        // e.preventDefault();

    }

  return (
    <div>
      <div className="text-black  min-w-full  px-4 py-7 border-1 border-[#ececec] rounded ">
      <div className="flex flex-col gap-3">
        <div className="font-semibold text-2xl"> Select payment method</div>   
                <div
                 className= "bg-base-100 py-4 pl-4 rounded-lg  text-sm my-4 border-1 border-[#d5cbcb]"
                  >
                  <label className="flex gap-4 items-start cursor-pointer ">
                    <input type="checkbox" className="w-5 h-5 mt-2" />
                    <div className="flex flex-col">
                
                      <span className="font-semibold text-neutral text-lg">Pay via CT Money wallet</span>
                         <span>Available balance: <span className="font-medium">₹ 11</span></span>
                    </div>
                   </label>
                </div>

                <div
                 className= "bg-base-100 py-4 pl-4 rounded-lg  text-sm my-4 border-1 border-[#d5cbcb]"
                  >
                  <label className="flex gap-4 items-start cursor-pointer ">
                    <input type="radio" className="w-3 h-3 mt-2" name="payment-method" value="pay-online" defaultChecked onChange={()=>setType("pay-online")} />
                    <div className="flex flex-col">
                      <span className="font-semibold text-neutral text-lg">Pay Online</span>
                         <span className="text-[#616161] text-sm font-medium">Pay via UPI, Debit Card, Credit Card, Net Banking, etc.</span>
                    </div>
                   </label>
                </div>

             <div
                 className= "bg-base-100 py-4 pl-4 rounded-lg  text-sm my-4 border-1 border-[#d5cbcb]"
                  >
                  <label className="flex gap-4 items-start cursor-pointer ">
                    <input type="radio" className="w-3 h-3 mt-2" name="payment-method" value="pay-cod" onChange={()=>setType("pay-cod")}  />
      
                      <span className="font-semibold text-neutral text-lg">COD</span>
                      
                   </label>
                </div>

                
              </div>
                <div className=" bg-neutral text-base-100 text-center font-bold rounded mt-4   w-full ">
       
          <div className="mx-auto w-full  py-4 cursor-pointer" onClick={()=>placeOrderhandler(type)}>PLACE ORDER</div>
          
          </div>
            
          </div>
    
 
    </div>
  )
}

export default Payment