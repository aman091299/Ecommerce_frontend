'use client'
import Image from "next/image";
import { useRef,useState } from "react";
import Link from "next/link";

const excludeDropdowns=["Parathas","Marinades","Curries","Eggs"]
const categories = [
  { 
    name: "Exclusive Deals",
    icon: "https://cambaytigerstage-media.farziengineer.co/hosted/bxs_offer_1-237de948d7db.png",
    dropdown: ["Limited Time", "Top Picks", "Festive Offers"],
  },
  {
    name: "Combos",
    icon: "https://cti.farziengineer.co/hosted/tEST_Combo_Icon_88x88px-d88b6775b75c.png",
    dropdown: [
      "All",
      "Party Starter",
      "Grill Master",
      "Breakfast Bounty",
      "Spice Kit",
    ],
  },
  {
    name: "Fish & Seafood",
    icon: "https://cti.farziengineer.co/hosted/Fish_NEW_Category_Icon_88_x_88_px-3679f8146cab.png",
    dropdown: ["Fish Fillets", "Shellfish", "Crustaceans"],
  },
  {
    name: "Prawns",
    icon: "https://cti.farziengineer.co/hosted/Category_Icons_88_x_88_px-d6fd40bbe57b.png",
    dropdown: ["Sea Prawns", "Farmed Prawns", "Bundles"],
  },
  {
    name: "Poultry",
    icon: "https://cti.farziengineer.co/hosted/CHICKEN_V20_Category_Icon_88_x_88_px-b0922ae50003.png",
    dropdown: ["Chicken Cuts", "Whole Chicken", "Wings"],
  },
  {
    name: "Mutton",
    icon: "https://cti.farziengineer.co/hosted/MUTTON_V30_Category_Icon_88_x_88_px-d9c3d875676d.png",
    dropdown: ["Goat", "Lamb", "Minced"],
  },
  {
    name: "Ready to cook",
    icon: "https://cti.farziengineer.co/hosted/RTC_Icon_88x88_px-2d32453eed80.png",
    dropdown: ["Chicken RTC", "Seafood RTC", "Prawn RTC"],
  },
  {
    name: "Frozen Seafood",
    icon: "https://cti.farziengineer.co/hosted/pomfret-frozen-category-icon-88x88px-6369874e5424.png",
    dropdown: ["Pomfret", "Frozen Prawns", "Frozen Fillets"],
  },
  {
    name: "Kebabs",
    icon: "https://cti.farziengineer.co/hosted/Category_Icons_-_Kebab_88_x_88_px-eb9017d53d38.png",
    dropdown: ["Chicken Kebabs", "Mutton Kebabs", "Seafood Kebabs"],
  },
  {
    name: "Deli",
    icon: "https://cti.farziengineer.co/hosted/Cold_cuts_category_icon-9c53f52c2e1d.png",
    dropdown: ["Cold Cuts", "Smoked Meats", "Sliced Sausages"],
  },
  {
    name: "Eggs",
    icon: "https://cti.farziengineer.co/hosted/Eggs_Category_Icon_88_x_88_px-c580e3994cff.png",
    // dropdown: ["White Eggs", "Brown Eggs", "Organic Eggs"],
  },
  {
    name: "Curries",
    icon: "https://cti.farziengineer.co/hosted/Curries_Category_Icon_88_x_88_px-b47bfdbd7f97.png",
    // dropdown: ["Chicken Curry", "Fish Curry", "Mutton Curry"],
  },
  {
    name: "Marinades",
    icon: "https://cti.farziengineer.co/hosted/Marinade_Category_Icon_88_x_88_px-29403b3a4083.png",
    // dropdown: ["Tikka Marinade", "Spicy Marinade", "Herb Marinade"],
  },
  {
    name: "Parathas",
    icon: "https://cti.farziengineer.co/hosted/Paratha_Category_Icon_88_x_88_px-487eadcf6f9a.png",
    // dropdown: ["Plain Paratha", "Stuffed Paratha", "Mini Paratha"],
  },
];

const CategoryButton = () => {
  const scrollRef=useRef(null);
  const [showRightButton,setShowRightButton]=useState(false);
  const  [showLeftButton,setShowLeftButton]=useState(true);

 const checkScroll=()=>{
   const element=scrollRef.current
    if(!element){
      return;
    }
   if(element.scrollLeft > 11){
    setShowRightButton(true);
   
   }
    if(element.scrollLeft > 140){
    setShowLeftButton(false);
   }
     if(element.scrollLeft <= 50){
    setShowRightButton(false);
    setShowLeftButton(true);
   }

}

  const scroll=(direction)=>{
   
    let scrollAmount=0;
    const element=scrollRef.current
    if(!element){
      return;
    }

    if(direction==='left'){
      scrollAmount=-150;
      
    }
    if(direction==='right'){
       scrollAmount=150;

    }
    
    scrollRef.current.scrollBy({left:scrollAmount,behaviour:"smooth"});

setTimeout(checkScroll, 200);
   
  }

  return (
    <div ref={scrollRef} className="shadow-lg overflow-x-auto scroll-smooth scrollbar-hide cursor-pointer">
      <div className="mx-2 flex items-center justify-center w-[1550px] h-24 ">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex flex-col items-center justify-center w-full border-r-gray-300 border-r-1 h-full group "
          >
            <Image src={cat.icon} alt="navbar-icons" width={40} height={40} />
            <div className="flex justify-center  items-baseline gap-2">
              <div className="text-[11px] max-w-10 h-9 py-1">{cat.name}</div>
           {  !excludeDropdowns.includes(cat.name) && 
           <svg     
             width="6"
               height="12"  
             className="transition-transform duration-300 rotate-90 group-hover:rotate-270 fill-black group-hover:fill-red-400"
                viewBox="0 0 6 12"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L0 12V0L6 6Z" ></path>
              </svg>
           }
           {!excludeDropdowns.includes(cat.name) && 
               <div className="hidden z-100 rounded-lg absolute top-[179px] w-32 shadow-md bg-white px-2 py-3 group-hover:block ">
               {cat?.dropdown?.map((subCat,index)=>(
                <div key={index}>
                <Link href={"/collection/"+(cat.name).toLowerCase()+"/"+subCat.toLowerCase()}>
                  <div  className="hover:bg-[#f2f2f2] px-2 py-2 rounded-lg text-[12px] cursor-pointer ">{subCat}</div>
               </Link>
                 <div className=" border-b-[#f2f2f2] border-b-1 border-b-rounded-full "></div>
                 </div>
               ))}
               </div>
               }
            </div>
          </div>
        ))}
      </div>
      {showRightButton&&
      <button
         onClick={() => scroll("left")}
        className=" absolute left-2 top-31 -translate-y-1/2 z-50 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="black"
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
        className="absolute right-2 top-31 -translate-y-1/2 z-50 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="black"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
      }
    </div>
  );
};

export default CategoryButton;

