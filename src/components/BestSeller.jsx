import React, { useContext, useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Tittle from './Tittle'
import ProductItem from './ProductItem';


export default function BestSeller() {
    const {products} = useContext(ShopContext);
    const [bestSeller,setBestseller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller));
        setBestseller(bestProduct.slice(0,5));
    },[])
  return (
    <div className='my-10'>
        <div className="text-center text-3xl py-8">
            <Tittle text1={'BEST'} text2={'SELLER'}/> 
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'> 
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, eos!</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {
                bestSeller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} img={item.image?.[0] || 'fallback.jpg'} price={item.price}  />
                ))
            }
        </div>
    
    </div>
  )
}
