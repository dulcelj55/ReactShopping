import Menu from '../../Menu'
import ProductList from '../../ProductList'
import Cart from '../Cart'
import './index.css'

const Dashboard = () => {
  return (
    <div id="dashboard">
    <h1>Dashboard - select some products!</h1>    
    <Menu/>
    <ProductList/>
    <Cart/>
    </div>
  )
}

export default Dashboard