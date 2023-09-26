import {useContext}from 'react'
import { primaryContext } from '../../Context/PrimaryContext'
import Card from '../Card';

const Cart = () => {
const {cart, products } = useContext(primaryContext);

    let arrayOfCards = cart.map((cartItem) => {

        let correctProduct = products.find((prod) => {

            if (prod.id === cartItem.productId) {

                return true

            } else {

                return false

            }

        })

        return <Card key={correctProduct.title}
         productData={correctProduct}
         howMany={cartItem.howMany} />

  
})

  return (
    <>
    <h1>Cart</h1>
    {arrayOfCards}
    </>
   
  )
}

export default Cart