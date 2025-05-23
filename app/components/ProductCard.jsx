import Image from "next/image"
import Link from "next/link"

const ProductCard=({image,name,description,actualPrice,_id})=>{
   const formattedName = name.trim().replace(/&/g, 'and').replace(/'/g, '').replace(/\s+/g, "-").toLocaleLowerCase()
    return (
        <div>
        <Link href={"/product/" +formattedName}>
        <div className="card bg-base-100 w-70 shadow-sm px-1 py-4">
  <figure>
 <Image src={image[0]} height={600} width={1090} alt="Product image" className="h-[170px] w-[700px]" />

  </figure>
  <div className="card-body p-2">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="flex flex-row items-center justify-between">
    <div className="text-[13px]"> Starting from ₹{actualPrice}</div>
      <button className="btn btn-neutral">Add to Cart</button>
    </div>
  </div>
</div>
</Link>
        </div>
    )
}

export default ProductCard;