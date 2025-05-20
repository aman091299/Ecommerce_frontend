"use client";
import ProductCardContainer from "@/app/components/ProductCardContainer";
import { useState } from "react";

const links = [
  "ALL",
  "Party Starter",
  "Grill Master",
  "Breakfast Bounty",
  "Spice Kit",
];
const extraLinks = [
  "Health Benefits",
  "Cooking Time",
  "Best Suited for",
  "Bone type",
  "Cuts",
];
const dropdownHealthLinks = [
  {
    name: "Health Benefits",
    dropdownList: [
      "Heart Healthy",
      "Lean Protein",
      "Weight Loss",
      "Diabetic Friendly",
      "Stupendous Eyesight",
      "Low Fat",
      "Aids Metabolism",
      "Vitamin B12 Rich",
      "Sturdy Bones",
      "Stress Killer",
    ],
  },
  {
    name: "Cooking Time",
    dropdownList: ["<10 mins", "10 - 15 mins", "15 - 30 mins", ">30 mins"],
  },
  {
    name: "Best Suited for",
    dropdownList: [
      "Grill",
      "Fry",
      "Roast",
      "Curry",
      "Biryani",
      "Steam",
      "Raw",
      "Soup",
    ],
  },
  {
    name: "Bone type",
    dropdownList: ["Boneless", "Bone-In"],
  },
  {
    name: "Cuts",
    dropdownList: [
      "Whole",
      "Steaks",
      "Fillet",
      "Whole cleaned",
      "DVC",
      "DVT",
      "Moon cut",
      "Bengali Cut",
      "Curry Cut",
      "Breast",
      "Drumstick",
      "Leg",
      "Lollipop",
      "Raan",
      "Chops",
      "Nalli",
    ],
  },
];

const page = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [extraLinksCurrentIndex, setExtraLinksCurrentIndex] = useState(0);

  return (
    <div className="mx-12 my-4">
      <div className="font-bold  text-3xl mt-4">Combos</div>
      <div>
        <div className="flex gap-3 py-2 ">
          {links?.map((link, index) => (
            <div
              key={link}
              className={
                extraLinksCurrentIndex === index
                  ? "border-b-2 text-orange-500"
                  : "" + " px-1"
              }
              onClick={() => setExtraLinksCurrentIndex(index)}
            >
              {link}
            </div>
          ))}
        </div>
        <div className="flex gap-3 py-2 ">
          {dropdownHealthLinks?.map((link, index) => (
            <div key={link.name}>
              <div
                className={
                  (currentIndex === index
                    ? "border-b-2 text-orange-500  "
                    : "text-[#8c8c8c]") +
                  "  shadow-lg border-1 border-[#f1eded] px-4 py-3 rounded-lg flex items-center justify-center gap-2"
                }
                onClick={() => {
                  if (index === currentIndex) setCurrentIndex(-1);
                  else setCurrentIndex(index);
                }}
              >
                <div className=" font-semibold text-sm">{link.name}</div>
                <div>
                  {currentIndex === index ? (
                    <svg
                      className=""
                      width="12"
                      height="6"
                      viewBox="0 0 12 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.8402 0.853933L6.38589 5.85337C6.33523 5.89986 6.27508 5.93673 6.20887 5.96189C6.14265 5.98705 6.07168 6 6 6C5.92832 6 5.85735 5.98705 5.79113 5.96189C5.72492 5.93673 5.66476 5.89986 5.61411 5.85337L0.159841 0.853933C0.0574964 0.760123 0 0.632889 0 0.500222C0 0.367555 0.0574964 0.240321 0.159841 0.146511C0.262185 0.0527015 0.400994 0 0.54573 0C0.690467 0 0.829275 0.0527015 0.93162 0.146511L6 4.79287L11.0684 0.146511C11.1191 0.100061 11.1792 0.0632154 11.2454 0.0380769C11.3116 0.0129384 11.3826 0 11.4543 0C11.5259 0 11.5969 0.0129384 11.6631 0.0380769C11.7293 0.0632154 11.7895 0.100061 11.8402 0.146511C11.8908 0.192961 11.931 0.248106 11.9585 0.308795C11.9859 0.369485 12 0.434532 12 0.500222C12 0.565912 11.9859 0.630959 11.9585 0.691649C11.931 0.752339 11.8908 0.807483 11.8402 0.853933Z"
                        fill="orange"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="rotate-180"
                      width="12"
                      height="6"
                      viewBox="0 0 12 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.8402 0.853933L6.38589 5.85337C6.33523 5.89986 6.27508 5.93673 6.20887 5.96189C6.14265 5.98705 6.07168 6 6 6C5.92832 6 5.85735 5.98705 5.79113 5.96189C5.72492 5.93673 5.66476 5.89986 5.61411 5.85337L0.159841 0.853933C0.0574964 0.760123 0 0.632889 0 0.500222C0 0.367555 0.0574964 0.240321 0.159841 0.146511C0.262185 0.0527015 0.400994 0 0.54573 0C0.690467 0 0.829275 0.0527015 0.93162 0.146511L6 4.79287L11.0684 0.146511C11.1191 0.100061 11.1792 0.0632154 11.2454 0.0380769C11.3116 0.0129384 11.3826 0 11.4543 0C11.5259 0 11.5969 0.0129384 11.6631 0.0380769C11.7293 0.0632154 11.7895 0.100061 11.8402 0.146511C11.8908 0.192961 11.931 0.248106 11.9585 0.308795C11.9859 0.369485 12 0.434532 12 0.500222C12 0.565912 11.9859 0.630959 11.9585 0.691649C11.931 0.752339 11.8908 0.807483 11.8402 0.853933Z"
                        fill="#858585"
                      ></path>
                    </svg>
                  )}
                </div>
              </div>
              {currentIndex === index && (
                <div className=" bg-white z-100 absolute py-2 mt-2 rounded-lg min-w-[270px]">
                  <div className=" grid grid-cols-2 ">
                    {link?.dropdownList?.map((list, index) => (
                      <div key={index} className="flex gap-2 mx-6 ">
                        <input
                          type="checkbox"
                          className="accent-orange-500  rounded focus:ring-orange-300"
                        />
                        <div className="text-sm leading-10">{list}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-evenly items-center px-4 pt-2 mt-2 w-full border-t-1  border-[#f1eded] ">
                    <div className="text-sm text-[#8c8c8c]">CLEAR ALL</div>
                    <div className="btn btn-neutral text-sm">APPLY</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <ProductCardContainer />
    </div>
  );
};

export default page;
