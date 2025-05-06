import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import { assets } from '../assets/assets';
import Tittle from '../components/Tittle'
import ProductItem from '../components/ProductItem'
export default function Collection() {
    const {products, search,setSearch} = useContext(ShopContext);
    const [showFilter,setShowfilter] = useState(false);// these is just used for mobile devices
    const [filterProduct,setfilterProducts] = useState([]); //all product will be present here 
    const [category,setCategarys] = useState([]);
    const [subCategory,setSubCategarys] = useState([]);
    const [shortType,setShortType] = useState('relevent');
    
    const toggleCategory = (e) => {
        if(category.includes(e.target.value) ) {
            setCategarys(prev => prev.filter(item => item !== e.target.value))
        }else {
            setCategarys(prev => [...prev,e.target.value])
        }
    }
    const toggleSubCategory = (e) => {
        if(subCategory.includes(e.target.value) ) {
            setSubCategarys(prev => prev.filter(item => item !== e.target.value))
        }else {
            setSubCategarys(prev => [...prev,e.target.value])
        }
    }

    const applyFilter = () => {
        let productsCopy = products.slice();
        if(setSearch && search){
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }
        // these is for search that will search acording to 
        if(category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category))
        }
        
        if(subCategory.length > 0) {
            productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))

        }    
        // console.log(productsCopy);
        setfilterProducts(productsCopy);
    } 
    //sort function
    const sortFunctions = () => {
        let filterproductsCopy = filterProduct.slice();
        switch(shortType) {
            case 'low-High' :
                setfilterProducts(filterproductsCopy.sort((a,b) => (a.price - b.price)));
                break;
            case 'High-Low' :
                setfilterProducts(filterproductsCopy.sort((a,b) => (b.price - a.price)));
                break;
            default :
                applyFilter();
                break;
        }
    }


    useEffect(() => {
        applyFilter();
    },[category,subCategory,search,setSearch]);
    //running the sort function 
    useEffect(() => {
        sortFunctions();
    },[shortType]);
    
    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'> 
        {/* Filters option */}
        <div className="min-w-60">
            <p onClick={() => setShowfilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTER
            <img className={`h-3 sm:hidden ${showFilter? 'rotate-90': ''}`} src={assets.dropdown_icon} alt="" />
            </p>
            {/* Category filter */}
            <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block` }>
                <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                    <p className="flex gap-2"> 
                        <input type="checkbox" className='w-3'  value={'Men'} onChange={toggleCategory}/>Men
                    </p>
                    <p className="flex gap-2"> 
                        <input type="checkbox" className='w-3'  value={"Women"} onChange={toggleCategory}/>Women
                    </p>
                    <p className="flex gap-2"> 
                        <input type="checkbox" className='w-3'  value={'Kids'} onChange={toggleCategory}/>Kids
                    </p>
                </div>
            </div>
            {/* SubCategory Filter */}
            <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block` }>
                <p className='mb-3 text-sm font-medium'>TYPE</p>
                <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                    <p className="flex gap-2"> 
                        <input type="checkbox" className='w-3'  value={'Topwear'} onChange={toggleSubCategory}/>Topwear
                    </p>
                    <p className="flex gap-2"> 
                        <input type="checkbox" className='w-3'  value={'Bottomwear'} onChange={toggleSubCategory}/>Bottomwear
                    </p>
                    <p className="flex gap-2"> 
                        <input type="checkbox" className='w-3'  value={'Winterwear'} onChange={toggleSubCategory}/>Winterwear
                    </p>
                </div>
            </div>
        </div> 
        {/* Right Side */}
        <div className="flex-1">
            <div className="flex justify-between text-base sm:text-2xl mb-4">
                <Tittle text1={'ALL'} text2={'COLLECTIONS'}/>
                {/* Product Short */}
                <select onChange={(e) => setShortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                    <option value="relevent">Short By Relavent</option>
                    <option value="low-High">Short By low-High</option>
                    <option value="High-Low">Short By High-Low</option>
                </select>
            </div>
            {/*                MAp Products */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                {
                    filterProduct.map((item,index)=> (
                            <ProductItem
                            key={index}
                            name={item.name}
                            id={item._id}
                            price={item.price}
                            img={item.image?.[0] || 'fallback.jpg'}
                            />
                            
                    ))
                }
            </div>
        </div>
    </div>
    )
}
