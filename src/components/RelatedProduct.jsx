import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import Tittle from './Tittle'
import ProductItem from './ProductItem'

export default function RelatedProduct({cat,subcat}) {

    const {products} = useContext(ShopContext)
    const[related,setRelated] = useState([]);

    useEffect(() => {
        if(products.length > 0) {
            let productCopy = products.slice();
            productCopy = productCopy.filter((item) => cat === item.category)
            productCopy = productCopy.filter((item) => subcat === item.subCategory)

            setRelated(productCopy.slice(0,5))
        }
    },[products])
  return (
    <div className='my-24'>
        <div className="text-center text-3xl py-2">
            <Tittle text1={'RELATED'} text2={'PRODUCTS'}/>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {
                related.map((items, index) => (
                    <ProductItem key={index}
                    id={items._id}
                    name={items.name}
                    price={items.price}
                    img={items.image?.[0] || 'fallback.jpg'} 
                    />
                ))
            }
        </div>
    </div>
  )
}
