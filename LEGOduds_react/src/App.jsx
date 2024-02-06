import { useState } from 'react'
import './App.css'
import Contentpage from './components/Contentpage'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
const [amount, setAmount] = useState(0)
const [category, setCategory] = useState("Ninjago")
const [cart, setCart] = useState([])

  return (
    <Routes>
      <Route path='/home' element={<Home />}/>
    </Routes>
    // <Layout cart={cart} setCart={setCart} amount={amount} category={category}>
    //     <Contentpage amount={amount} setAmount={setAmount} category={category} setCart={setCart} cart={cart}/>
    // </Layout>
        
  )

}

export default App
