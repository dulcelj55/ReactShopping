import { useContext } from "react"
import "./index.css"
import { primaryContext } from "../Context/PrimaryContext"
import Card from "../Components/Card"


const ProductList = () => {
    const {products} = useContext(primaryContext)


  return (
    <div className="product-list">
        {
            products.map((eachProduct)=> {
                return <Card key={eachProduct.id} productData={eachProduct}/>
            })
        }


    </div>
  )
}

export default ProductList