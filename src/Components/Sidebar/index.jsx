import { useContext } from 'react'
import './index.css'
import { primaryContext } from '../../Context/PrimaryContext'

const Sidebar = () => {
  const {cart} = useContext(primaryContext)

let totalNumber = cart.reduce((total, cartItem) => {

    

},0)


  return (
    <aside id="sidebar">
<h1>sidebar</h1>
<p>You have {cart.length} items in your cart</p>

    </aside>
  )
}

export default Sidebar