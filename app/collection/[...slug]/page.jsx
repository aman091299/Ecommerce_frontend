"use client";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import ProductCardContainer from "@/app/components/ProductCardContainer";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const categories = [
  {
    name: "Exclusive Deals",
    icon: "https://cambaytigerstage-media.farziengineer.co/hosted/bxs_offer_1-237de948d7db.png",
    dropdown: ["ALL","Limited Time", "Top Picks", "Festive Offers"],
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
    dropdown: ["ALL","Fish Fillets", "Shellfish", "Crustaceans"],
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
const links = [
  "ALL",
  "Party Starter",
  "Grill Master",
  "Breakfast Bounty",
  "Spice Kit",
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
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [linksCurrentIndex, setLinksCurrentIndex] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState({});
  const dropdownRef = useRef(null);
  const params = useParams();
  const collectionName = params.slug[0]
    .replace(/-/g, " ") // Replace dashes with spaces
    .replace(/\band\b/g, "&") // Replace 'and' with '&'
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word;
  const formatedCollectionName = params.slug[0];
  const formatedTagName = params.slug[1] || "all";
  const dynamicRoute = params.slug.join("/");
  const router = useRouter();

  const handleTabClick = (link) => {
    const formatedLink = link
      .replace(/&/g, "and")
      .replace(/'/g, "")
      .replace(/\s+/g, "-")
      .toLocaleLowerCase();
    router.push("/collection/" + formatedCollectionName + "/" + formatedLink);
  };

  const handleCheckboxChange = (e) => {
    const { value, checked, name } = e.target;

    if (checked) {
      setSelectedFilters((prev) => {
        const updated = { ...prev };

        if (!updated[name]) {
          updated[name] = [];
        }

        if (!updated[name].includes(value)) {
          updated[name].push(value);
        }

        return updated;
      });
    } else {
      setSelectedFilters((prev) => {
        const updated = { ...prev };

        updated[name] = updated[name]?.filter((item) => item !== value);

        return updated;
      });
    }
  };

  const toCamelCase = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, "") // remove special chars if needed
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
        index === 0 ? word.toLowerCase() : word.toUpperCase()
      )
      .replace(/\s+/g, "");
  };
  const getQueryString = (checkboxItems) => {
    const queryParams = [];
    for (const [key, values] of Object.entries(checkboxItems)) {
      const formattedKey = toCamelCase(key);

      values.forEach((value) => {
        const formattedValue = value.toLowerCase().replace(/\s+/g, "-");

        queryParams.push(formattedKey + "=" + formattedValue);
      });
    }
    const queryString = queryParams.join("&");

    return queryString;
  };

  const getProductData = async (checkboxItems) => {
    let queryStringValue = null;
    if (checkboxItems) {
      queryStringValue = getQueryString(checkboxItems);
      queryStringValue = "&" + queryStringValue;
    }

    try {
      let fullUrl =
        "http://localhost:3000/product/viewAllProducts/" +
        formatedCollectionName +
        "?tags=" +
        formatedTagName;

      if (queryStringValue) {
        fullUrl =
          "http://localhost:3000/product/viewAllProducts/" +
          formatedCollectionName +
          "?tags=" +
          formatedTagName +
          queryStringValue;
      }

      const products = await axios.get(fullUrl);
      setProducts(products.data.products);
    } catch (error) {
      console.error("Error in getting products" + error);
    }
    return;
  };

  useEffect(() => {
    const handleScroll = () => {
      setCurrentIndex(-1);
    };
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCurrentIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    getProductData(null);

    const index = links.findIndex((link) => {
      return link.toLowerCase().replace(/\s+/g, "-") === formatedTagName;
    });
    setLinksCurrentIndex(index);
  }, [dynamicRoute]);

  return (
    <div className="mx-12 my-4">
      <p>
        <Link href="/">
          <span className="hover:text-orange-600"> Home </span>
        </Link>
        {">"}
        <Link href={"/collection/" + formatedCollectionName}>
          <span className="hover:text-orange-600">{collectionName}</span>
        </Link>
        {">"}{" "}
        <span className="text-orange-600">{links[linksCurrentIndex]}</span>
      </p>
      <div className="font-bold  text-3xl mt-4">{collectionName}</div>
      <div>
        <div className="flex gap-3 py-2 ">
          {categories?.map((link, index) => (
            <div className="flex gap-3" key={index}>
              {link.name === collectionName &&
                link?.dropdown?.map((dropdownValue, index) => (
                  <div
                    key={dropdownValue}
                    className={
                      linksCurrentIndex === index
                        ? "border-b-2 text-orange-500"
                        : "" + " px-1 cursor-pointer"
                    }
                    onClick={() => handleTabClick(dropdownValue)}
                  >
                    {dropdownValue}
                  </div>
                ))}
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
                  " cursor-pointer  shadow-lg border-1 border-[#f1eded] px-4 py-3 rounded-lg flex items-center justify-center gap-2"
                }
                onClick={() => {
                  if (index === currentIndex) setCurrentIndex(-1);
                  else setCurrentIndex(index);
                }}
              >
                <div className="cursor-pointer font-semibold text-sm">
                  {link.name}
                </div>
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
                <div
                  ref={dropdownRef}
                  className=" bg-white z-100 absolute py-2 mt-2 rounded-lg min-w-[270px]"
                >
                  <div className=" grid grid-cols-2 ">
                    {link?.dropdownList?.map((list, listIndex) => (
                      <div key={listIndex} className="flex gap-2 mx-6 ">
                        <input
                          type="checkbox"
                          value={list}
                          name={link.name}
                          checked={!!selectedFilters[link.name]?.includes(list)}
                          onChange={handleCheckboxChange}
                          className="accent-orange-500  rounded focus:ring-orange-300"
                        />
                        <div className="text-sm leading-10">{list}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-evenly items-center px-4 pt-2 mt-2 w-full border-t-1  border-[#f1eded] ">
                    <div
                      className="btn text-sm text-[#8c8c8c]"
                      onClick={() => {
                        setSelectedFilters({});
                        getProductData(null);
                        setCurrentIndex(-1);
                      }}
                    >
                      CLEAR ALL
                    </div>
                    <div
                      className="btn btn-neutral text-sm"
                      onClick={() => {
                        getProductData(selectedFilters);
                        setCurrentIndex(-1);
                      }}
                    >
                      APPLY
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <ProductCardContainer products={products} />
    </div>
  );
};

export default page;
