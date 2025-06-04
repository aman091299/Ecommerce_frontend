import ProductCard from "./ProductCard"

const ProductCardContainer = ({products}) => {
   console.log("inside product card container")
  if(!products.length){
    return <div className="flex justify-center items-center">No Products</div>;
  }

  return (
    <div className="flex flex-wrap gap-4">
    {products?.map((product)=>(
       <ProductCard key={product._id} {...product} />
    ))}
        </div>
 
  )
}

export default ProductCardContainer