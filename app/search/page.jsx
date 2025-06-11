'use client'
 
import { useSearchParams } from 'next/navigation'
import { BASE_URL } from '../utils/constants'
import {useState,useEffect,useRef, useCallback} from "react";
import Loader from '../components/Loader';
import ProductCardContainer from '../components/ProductCardContainer';

const searchPage = () => {
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);
   const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
const searchParams = useSearchParams()
 const searchText = searchParams.get('searchText')
  const observerRef = useRef(null);
  console.log("search page values 8")
      console.log("inside get search pages....","products",products,"page",page,"hasMore",hasMore,"isFetching",isFetching,"observerRef",observerRef)

 const getSearchQueryProducts=async()=>{
    try {
      // setLoading(true);
      console.log("inside get search query function 3")
      if (!searchText || !hasMore) return;
       setIsFetching(true);
       const res=await fetch(BASE_URL+"/product/search?searchText="+searchText+"&page="+page+"&limit="+3,{credentials:'include'});
       const data =await res.json();
       console.log("data...44.",data)
  if (page === 1) {
      console.log("inside get search query function 5 set products")
        setProducts(data.products);
      } else {
        //all the products including previous products
        console.log("else inside get search query function previous products  set products6")

        setProducts(prev => [...prev, ...data.products]);
      }
      if (data.countProducts < 3) {
         console.log("else inside get search query function previous products sethas no more pages 7")
        setHasMore(false); // no more pages
      }
    } catch (error) {
      console.log("Error while get search text products",error);
    }finally{
      setLoading(false);
       setIsFetching(false);

    }
 }


  // Infinite scroll trigger
  const lastProductRef = useCallback(node => {
    if (isFetching) return;
    console.log("inside last product ref node1 and is fetch false and has node ",node,"observerRef",observerRef.current,"isFetaching",isFetching,"hasMore", hasMore)
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        console.log("seting page + 1",page,entries[0])
        setPage(prev => prev + 1);
      }
    });
    console.log("inside last product ref node 2",node,"observerRef",observerRef.current)

    if (node) observerRef.current.observe(node);
  }, [isFetching, hasMore]);

 useEffect(()=>{
  console.log("inside useEffect 1 ")
     if(searchText){
        console.log("inside useEffect  search text 2",searchText);

      getSearchQueryProducts();
     }
 },[searchText,page,hasMore])

 if(loading){

 return  <div className="relative w-screen h-screen">
    <Loader/>
  </div>

 }
  return (
    <div className="py-28 px-9 ml-3">
      <h1 className="text-xl font-semibold mb-4">Search Results for: "{searchText}"</h1>
    <ProductCardContainer products={products} lastProductRef={lastProductRef}/>
      {isFetching && (
        <div className="relative w-screen h-screen">
          <Loader />
        </div>
      )}
    </div>
  )
}

export default searchPage