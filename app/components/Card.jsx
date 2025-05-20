import Image from "next/image"
const Card=()=>{

    return (
        <div>
        <div className="card bg-base-100 w-74 shadow-sm px-1 py-4">
  <figure>
 <Image src="https://cti.farziengineer.co/products/1582-0d36c2d41ba9434bb02989e5d32fefc3.jpg?auto=format&fit=max&w=1600" height={600} width={1090} alt="Product image" className="h-[170px] w-[700px]" />

  </figure>
  <div className="card-body p-2">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="flex flex-row items-center justify-between">
    <div className="text-[13px]"> Starting from ₹990.50</div>
      <button className="btn btn-neutral">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    )
}

export default Card;