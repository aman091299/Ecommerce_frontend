'use client'
import ProductPageContainer from '@/app/components/ProductPageContainer';
import ProductRecipes from '@/app/components/ProductRecipes';
import { useParams } from 'next/navigation'
import axios from 'axios';
import { BASE_URL } from '@/app/utilis/constants';
import { useEffect ,useState } from 'react';

const Product=()=>{
  const [product,setProduct]=useState([]);
    const {slug}=useParams();
 
 
     const productData=async()=>{
        const data=await axios.get(BASE_URL+"/product/view/"+slug);
        setProduct(data.data.product);
     }
    useEffect(()=>{
         productData();
    },[])
     if (!product) {
    return <div className="flex justify-center items-center pt-34">Loading...</div>;
  }
      if (Object.keys(product).length === 0) {
    return <div className="flex justify-center items-center pt-34">No Products</div>;
  }
     
  return (
    <div className="px-6 pt-30 w-full">
     <ProductPageContainer {...product}/>
     <ProductRecipes {...product}/>
    </div>
  )

}

export default Product;