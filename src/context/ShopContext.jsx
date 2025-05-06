import { createContext, useState } from "react";
import { products,assets } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 100;
    const [search,setSearch] = useState('') 
    const [showSreach,setShowSearch] = useState(false) 
    const value = {
        products,currency,delivery_fee ,assets,search,setSearch,showSreach,setShowSearch
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider