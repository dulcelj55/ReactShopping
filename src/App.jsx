import { useEffect, useState, useContext } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'
import Footer from './Components/Footer'
import axios from 'axios'
import { primaryContext } from './Context/PrimaryContext'

function App() {

  const { setProducts } = useContext(primaryContext)
  useEffect(() => {
    axios("https://fakestoreapi.com/products/").then((response) =>{
      console.log(response);
      setProducts(response.data)
    }) 
  }, [])
  

  return (
    <div className="app">
      <Navbar/>
      <Sidebar/>
      <Dashboard/>
      <Footer/>

    </div>
  )
}

export default App
