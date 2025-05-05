import React from 'react'
import   { useContext } from 'react';
import { ShopContext } from '../context/ShopContext'

export default function About() {
    const { products, currency, delivery_fee } = useContext(ShopContext);
    return (
        <div>
            <p>{currency} {delivery_fee}</p>
            <p></p>
        {products.map((e, index) => (
            <div key={index} className="p-4 border mb-4 rounded-md shadow-md">
                <hr className="bg-[#542367] h-1 mb-2" />
                <p className="text-lg font-semibold">{e.name}</p>
                <h1 className="text-md">{e.description}</h1>
                <h3 className="text-sm text-gray-600">{e.category}</h3>
                <h6 className="text-sm text-gray-500">{e.subCategory}</h6>
                <h4 className="text-sm text-gray-800">{e.sizes}</h4>
                <hr className="bg-[#542367] h-1 mt-2" />
            </div>
        ))}
    </div>
      
    )
    }
