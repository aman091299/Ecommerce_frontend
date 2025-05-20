import Heading from "./Heading";
import Image from "next/image";

const categories = [
  { 
    name: "Exclusive Deals",
    
    icon: "https://cti.farziengineer.co/collection-backgrounds/Rectangle_28_3.png?auto=format&fit=max&w=1200",
    dropdown: ["Limited Time", "Top Picks", "Festive Offers"],
    items:21,
  },
  {
    name: "Combos",
    icon: "https://cti.farziengineer.co/collection-backgrounds/Fish_Category_Image_522_x_522_px.png?auto=format&fit=max&w=1200",
    dropdown: [
      "All",
      "Party Starter",
      "Grill Master",
      "Breakfast Bounty",
      "Spice Kit",
    ],
     items:55,
  },
  {
    name: "Fish & Seafood",
    icon: "https://cti.farziengineer.co/collection-backgrounds/Prawns_Category_Image_522_x_522_px.png?auto=format&fit=max&w=1200",
    dropdown: ["Fish Fillets", "Shellfish", "Crustaceans"],
     items:33,
  },
  {
    name: "Prawns",
    icon: "https://cti.farziengineer.co/collection-backgrounds/Chicken_Category_Image_522_x_522_px.png?auto=format&fit=max&w=1200",
    dropdown: ["Sea Prawns", "Farmed Prawns", "Bundles"],
     items:34,
  },
  {
    name: "Poultry",
    icon: "https://cti.farziengineer.co/collection-backgrounds/Chicken_Category_Image_522_x_522_px.png?auto=format&fit=max&w=1200",
    dropdown: ["Chicken Cuts", "Whole Chicken", "Wings"],
     items:21,
  },
  {
    name: "Mutton",
    icon: "https://cti.farziengineer.co/collection-backgrounds/Mutton_Category_Image_522_x_522_px.png?auto=format&fit=max&w=1200",
    dropdown: ["Goat", "Lamb", "Minced"],
     items:21,
  },
  {
    name: "Ready to cook",
    icon: "https://cti.farziengineer.co/collection-backgrounds/RTC_Category_Image_4.png?auto=format&fit=max&w=1200",
    dropdown: ["Chicken RTC", "Seafood RTC", "Prawn RTC"],
     items:21,
  },
  {
    name: "Frozen Seafood",
    icon: "https://cti.farziengineer.co/collection-backgrounds/Frozen_Category_Image_522_x_522_px.png?auto=format&fit=max&w=1200",
    dropdown: ["Pomfret", "Frozen Prawns", "Frozen Fillets"],
     items:21,
  },
  {
    name: "Kebabs",
    icon: "https://cti.farziengineer.co/collection-backgrounds/shop_by_category_-_kebab_522_x_522_px.png?auto=format&amp;fit=max&amp;w=1200",
    dropdown: ["Chicken Kebabs", "Mutton Kebabs", "Seafood Kebabs"],
     items:21,
  },
  {
    name: "Deli",
    icon: "https://cti.farziengineer.co/collection-backgrounds/Shop_by_category_522x522_px.png?auto=format&fit=max&w=1200",
    dropdown: ["Cold Cuts", "Smoked Meats", "Sliced Sausages"],
     items:21,
  },
  {
    name: "Eggs",
    icon: "https://cti.farziengineer.co/collection-backgrounds/Eggs_category_Image_522_x_522_px.png?auto=format&fit=max&w=1200",
    // dropdown: ["White Eggs", "Brown Eggs", "Organic Eggs"],
     items:21,
  },
  {
    name: "Curries",
    icon: "https://cti.farziengineer.co/collection-backgrounds/Moilee_Curry_Category_Images_522x522.png?auto=format&fit=max&w=1200",
    // dropdown: ["Chicken Curry", "Fish Curry", "Mutton Curry"],
     items:21,
  },
  {
    name: "Marinades",
    icon: "https://cti.farziengineer.co/collection-backgrounds/Category_Image_Marinades.png?auto=format&fit=max&w=1200",
    // dropdown: ["Tikka Marinade", "Spicy Marinade", "Herb Marinade"],
     items:21,
  },
  {
    name: "Parathas",
    icon: "https://cti.farziengineer.co/collection-backgrounds/Paratha_Category_Images_416x560.png?auto=format&fit=max&w=320 320w",
    // dropdown: ["Plain Paratha", "Stuffed Paratha", "Mini Paratha"],
     items:21,
  },
];

const Categories = () => {
  return (
    <div className="rounded-t-[340px] bg-amber-300 pl-4 mt-10">
    <div className="py-3">
        <Heading  headingContent={"Shop by Category"}/>
        <div className="flex flex-wrap gap-4 mt-12">
            {categories.map(cat=>(
                <div key={cat.name} className="flex flex-col items-center w-58 cursor-pointer">
                <Image src={cat.icon} alt="navbar-icons" width={100} height={100} className="rounded-full w-35 h-35" />
                <div className="font-semibold text-sm">{cat.name}</div>
                <div className="text-[#808080] text-[13px]">{cat.items} items</div>
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default Categories