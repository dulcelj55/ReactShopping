import { createContext, useState, useContext } from "react";

export const primaryContext= createContext();

const PrimaryProvider = (props) => {
    const [products, setProducts] = useState([]);
console.log(products)
    return (
        <primaryContext.Provider value= {{products,setProducts}}>

{props.children}
        </primaryContext.Provider>
    )
}
export default PrimaryProvider