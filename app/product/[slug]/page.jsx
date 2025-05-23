'use client'
import ProductPageContainer from '@/app/components/ProductPageContainer';
import ProductRecipes from '@/app/components/ProductRecipes';
import { useParams } from 'next/navigation'

const Product=()=>{
    const {slug}=useParams();
    console.log(slug)
 

  return (
    <div className="px-6 mt-8  w-full">
     <ProductPageContainer/>
     <ProductRecipes/>
    </div>
  )

}

export default Product;