import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Tittle from './Tittle';
import ProductItem from './ProductItem';
export default function LatestCollections() {

    const {products} = useContext(ShopContext);
    const[lastestProduct,setLastestProduct] = useState([]);
    
    useEffect(() => {
      setLastestProduct(products.slice(0,10));
    },[])

  return (
    <div className='my-10'>
        <div className="text-center py-8 text-3xl">
            <Tittle text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias maiores laborum dignissimos a ullam commodi, neque adipisci animi voluptate sunt repellat voluptates molestiae delectus dicta, beatae vitae possimus doloremque optio consectetur quod facere, soluta perspiciatis! Itaque dolorem magni unde quo cum pariatur voluptatum ratione, nobis, earum, ipsum et odit tenetur.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {
            lastestProduct.map((e ,indx) => (
              
            <ProductItem 
              key={indx} 
              id={e._id} 
              img={e.image?.[0] || 'fallback.jpg'}
              name={e.name} 
              price={e.price} 
            />
          ))
          }
        </div>
    </div>
  )
}
