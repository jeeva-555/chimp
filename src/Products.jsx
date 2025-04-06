import React, { useState } from 'react'
import { addtocart } from './slice'
import { useDispatch } from 'react-redux'

function Products() {


    const[active,setactive] = useState(false);

    const bg = active?"bg-blue-500":"bg-red-500";

    const Products = [
            {
                id:1,
                productName:"nike",
                price:200
            },
            {
                id:2,
                productName:"adidas",
                price:300
            },
            {
                id:3,
                productName:"rebook",
                price:400
            },
            {
                id:4,
                productName:"rebook1",
                price:500
            },
            {
                id:5,
                productName:"rebook2",
                price:600
            },
            {
                id:6,
                productName:"rebook3",
                price:700
            },
            {
                id:7,
                productName:"rebook4",
                price:800
            }
    ]
  return (
    <div className='w-full h-[50vh] flex justify-center items-center'>
         {Products.map(product =>{
            return(
                <div className='flex flex-col items-center justify-center m-3 border-2 border-gray-700 w-[200px] h-[200px] rounded-[20px]' key={product.id}>
                    <p className='my-2'>productname : {product.productName}</p>
                    <p className='mb-2'>price : {product.price}</p>
                    <button className = "border-2 border-red-300 rounded-[5px] px-2 hover:bg-red-400" onClick={()=>{setactive(prev=>!prev)}} >add to cart</button>
                </div>
            )
         })}
    </div>
  )
}

export default Products