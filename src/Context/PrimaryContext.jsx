import { createContext, useState, useContext } from "react";

export const primaryContext= createContext();

const PrimaryProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
console.log({cart})
    return (
        <primaryContext.Provider value= {{
            products,setProducts, cart, setCart}}>

{props.children}
        </primaryContext.Provider>
    )
}
export default PrimaryProvider