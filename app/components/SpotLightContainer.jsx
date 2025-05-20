
import {useRef,useState} from 'react';
import Heading from './Heading';
import Card from "./Card";

const SpotLightContainer = () => {

    const scrollRef=useRef(null);
  const [showRightButton,setShowRightButton]=useState(false);
  const  [showLeftButton,setShowLeftButton]=useState(true);

 const checkScroll=()=>{
   const element=scrollRef.current
    if(!element){
      return;
    }
  
     console.log("scrollLeft",element.scrollLeft,"scrollWidth",element.scrollWidth ,"clientWidth",element.clientWidth)
  //  if(element.scrollLeft > 11){
  //   setShowRightButton(true);
   
  //  }
  //   if(element.scrollLeft > 1500){
  //   setShowLeftButton(false);
  //  }
  //    if(element.scrollLeft <= 200){
  //   setShowRightButton(false);
  //   setShowLeftButton(true);
  //  }
   const maxScroll = element.scrollWidth - element.clientWidth;
   console.log('maxScroll',maxScroll)
    setShowLeftButton(maxScroll-120 > element.scrollLeft);
    setShowRightButton(element.scrollLeft >=20 );

}

  const scroll=(direction)=>{
   
    
    const element=scrollRef.current
    if(!element){
      return;
    }

    const scrollAmount = direction ==='left'? -312 : 312
    console.log('scroollAmount',scrollAmount)
    scrollRef.current.scrollBy({left:scrollAmount,behavior:"smooth"});

setTimeout(checkScroll, 500);
   
  }

  return (
    <div>
     <Heading headingContent={"In the Spotlight"}/>
    <div ref={scrollRef} className="flex mx-4 gap-4 mt-4  shadow-lg overflow-hidden scroll-smooth scrollbar-hide cursor-pointer">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
     <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
      {showRightButton&&
      <button
         onClick={() => scroll("left")}
        className=" absolute left-2 top-180 -translate-y-1/2 z-50 bg-black rounded-full shadow-md p-2"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="white"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      }
      {showLeftButton &&
       <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-180 -translate-y-1/2 z-50 bg-black rounded-full shadow-md p-2"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="white"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
      }
    </div>
    </div>
  )
}

export default SpotLightContainer