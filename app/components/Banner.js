'use client'
import Image from "next/image";
import {useEffect, useState} from 'react'
const bannerImages=[{
  img1:"https://cti.farziengineer.co/banners/57c8ad620a094b5f9ffec3bce5c1df8f.png?auto=format&sharp=20&ixlib=react-9.3.0"
},
{
  img1:"https://cti.farziengineer.co/banners/2fd3f2aaf6334ed6bbe109a3d416a4f8.png?auto=format&sharp=20&ixlib=react-9.3.0"
},
{
  img1:"https://cti.farziengineer.co/banners/09c5332b6ece4f3aa6e9698a8d7e9cda.png?auto=format&sharp=20&ixlib=react-9.3.0"
},
{
  img1:"https://cti.farziengineer.co/banners/d9c29148a9794f30b9b862df26d4e28a.png?auto=format&sharp=20&ixlib=react-9.3.0"
},

]
const Banner=()=>{
const [currentIndex,setCurrentIndex]=useState(0);
useEffect(()=>{
 const interval=setInterval(() => {
    setCurrentIndex(prev=>
       bannerImages.length === prev+1 ? 0 : prev+1   
    )
 }, 3000);

 return ()=>{
  clearInterval(interval)
 }
},[])
       if(!bannerImages[3].img1){
        return <div className="flex justify-between items-center w-full h-[310px] ">Loading...</div>
       }
    return(
       <div className=" w-full h-[300px] overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out" // Changed: smooth scroll animation
        style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Changed: shift container to show current image
      >
        {bannerImages?.map((bannerImg,index)=>(
          <div key={index} className="min-w-full h-[300px] relative "> {/* Changed: make each slide full width */}
                 <Image  src={bannerImg?.img1} 
                   fill
                     alt="banner Images"
                        className="object-cover"
                         priority
                //    className={(currentIndex ===index)?"block ":"hidden "+"object-cover transition-all duration-500 ease-in-out cursor-pointer"}
                    // layout="responsive"
                     />
                     
                     </div>
        ))}
        </div>
         {/* Dot Pagination */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex space-x-2">
        {bannerImages.map((_, idx) => (
          <div
            key={idx}
            className={
              (currentIndex === idx ? "bg-white " : "bg-gray-400 ")+"w-2 h-2 rounded-full "
            }
          ></div>
        ))}
      </div>
        </div>
    )
}

export default Banner;