import ProductCard from "./ProductCard"

const ProductCardContainer = ({products}) => {

  return (
    <div className="flex flex-wrap gap-4">
    {products?.map((product)=>(
       <ProductCard key={product._id} {...product}/>
    ))}
        </div>
 
  )
}

export default ProductCardContainer