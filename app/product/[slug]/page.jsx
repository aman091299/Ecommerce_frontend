'use client'
import ProductPageContainer from '@/app/components/ProductPageContainer';
import ProductRecipes from '@/app/components/ProductRecipes';
import { useParams } from 'next/navigation'
import axios from 'axios';
import { BASE_URL } from '@/app/utilis/constants';
import { useEffect ,useState } from 'react';

const Product=()=>{
  const [product,setProduct]=useState(null);
    const {slug}=useParams();
    console.log(product)
 
     const productData=async()=>{
        const data=await axios.get(BASE_URL+"/product/view/"+slug);
        setProduct(data.data.product)
     }
    useEffect(()=>{
         productData();
    },[])
     if (!product) {
    return <div className="p-6">Loading...</div>;
  }
     
  return (
    <div className="px-6 mt-8  w-full">
     <ProductPageContainer {...product}/>
     <ProductRecipes {...product}/>
    </div>
  )

}

export default Product;