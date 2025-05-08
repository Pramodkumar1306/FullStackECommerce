import { createContext, useEffect, useState } from "react";
import { products,assets } from "../assets/assets";
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 100;
    const [search,setSearch] = useState('') 
    const [showSreach,setShowSearch] = useState(false) 
    const navigate = useNavigate();


    const [cartItem,setCartItem] = useState({});

    const addToCart = async(itemId,sizes) =>  {
        console.log("addToCart called with:", itemId, sizes); // ✅ Debug line
        console.log("Type:", typeof sizes);
        if (!sizes || sizes.trim() === "") {
            toast.error('Select Product Size');
            return;
        }
        

        let cartData = structuredClone(cartItem);

        if(cartData[itemId]) {
            if(cartData[itemId][sizes]) {
                cartData[itemId][sizes] +=1;
            }else {
                cartData[itemId][sizes] = 1;
            }
        }else {
            cartData[itemId] = {};
            cartData[itemId][sizes] = 1;
        }
        setCartItem(cartData);
    }

   const getCartCount = () => {
    let totalCount = 0;
    for(const items in cartItem ) {
        for(const item in cartItem[items]){
        try{
                if(cartItem[items][item] > 0) {
                    totalCount += cartItem[items][item];
                } 
        }catch(error) {

        }
    }
   }
   return totalCount;
}

const updateQuantety =async (itemsId,size,quantity) => {
    let cartData = structuredClone(cartItem);
    cartData[itemsId][size] = quantity;

    setCartItem(cartData)
}

const getCartAmount =  () => {
    let totalAmount =0;
    for(const items in cartItem){
        let itemInfo = products.find((product) => product._id === items);
        for(const item in cartItem[items]) {
            try{
                if(cartItem[items][item] > 0) {
                    totalAmount += itemInfo.price * cartItem[items][item]
                }
            }catch(error) {
                    
            }
        }
    }
    return totalAmount;
}

    const value = {
        products,currency,delivery_fee ,
        assets,search,setSearch,showSreach,
        setShowSearch,cartItem,addToCart,getCartCount,updateQuantety,
        getCartAmount,navigate 
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider