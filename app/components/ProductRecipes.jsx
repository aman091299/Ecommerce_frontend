import Image from "next/image";
import { useState } from "react";

const ProductRecipes = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex justify-between shadow-sm mt-10 w-full px-4 py-4">
      <div className="w-full">
        <div className="flex justify-evenly   mr-3 w-full px-4  font-semibold text-[#616161]">
          <div className={(activeIndex===0?"text-orange-600 border-b-1 w-1/3":"border-b-1 border-bg-[#ebebeb] w-1/3") + " px-17 py-3"} 
          onClick={()=>setActiveIndex(0)}>
          Nutri info
          </div>
          <div className={(activeIndex===1?"text-orange-600 border-b-1 w-1/3":"border-b-1 border-bg-[#ebebeb] w-1/3") + " px-17 py-3"}
           onClick={()=>setActiveIndex(1)}
           >More info
            </div>
          <div className={(activeIndex===2?"text-orange-600 border-b-1 w-1/3":"border-b-1 border-bg-[#ebebeb] w-1/3") + " px-17 py-3"} 
           onClick={()=>setActiveIndex(2)}
           >Recipes
            </div>
    
        </div>
        <div className="px-10 py-4 ">
          {activeIndex === 0 && (
            <div>
              <div className="font-semibold py-2">
              
                The nutritional value for 100g of raw Chicken Curry Cut is as
                follows:
              </div>
              <ul className="list-disc pl-5 text-sm">
                <li>Calories: Approximately 165-175 calories</li>
                <li>Protein: Approximately 20-22 grams</li>
                <li>Fat: Approximately 9-11 grams</li>
                <li>Carbohydrates: Negligible amount</li>
                <li>Cholesterol: Approximately 70-80 milligrams</li>
                <li>Sodium: Approximately 50-60 milligrams</li>
              </ul>
            </div>
          )}
          {activeIndex === 1 && (
            <div>
              <div className="font-semibold py-2"> Regional names across India:</div>
              <ul className="list-disc pl-5 text-sm">
                <li>Kukhura</li>
                <li>Kukda</li>
                <li>Kodi</li>
                <li>Murgi</li>
                <li>Murgh</li>
                <li>SKozhi</li>
              </ul>
            </div>
          )}
          {activeIndex === 2 && (
            <div>
              <div className="font-semibold py-2"> Popular Dishes Worth Trying!:</div>
              <ul className="list-disc pl-5 text-sm">
                <li>Chicken Stir-Fry</li>
                <li>Butter Chicken</li>
                <li>Butter Chicken</li>
                <li>Chicken Biryani</li>
                <li>Chicken Curry</li>
                <li>Chicken Kebabs</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div>
      {activeIndex===0 &&
         <Image
          src="https://cambaytigerstage-media.farziengineer.co/hosted/Nutriton_page_photo_689__461_px-3cf2b88a3f4d.png?auto=format&sharp=20&ixlib=react-9.3.0&w=1946"
          alt="Product Recipes Image"
          height={900}
          width={800}
        />
      }
       {activeIndex===1 &&
            <Image
          src="https://cambaytigerstage-media.farziengineer.co/hosted/Nutriton_page_photo_689__461_px_2-5bd937a72fb0.png?auto=format&sharp=20&ixlib=react-9.3.0&w=1946"
          alt="Product Recipes Image"
          height={900}
          width={800}
        />
        }
        {activeIndex===2 &&
          <Image
          src="https://cti.farziengineer.co/hosted/PDP_Culinary_image-6ea512394f8a.png?auto=format&sharp=20&ixlib=react-9.3.0&w=1946"
          alt="Product Recipes Image"
          height={900}
          width={800}
        />
      }
      </div>
    </div>
  );
};

export default ProductRecipes;
