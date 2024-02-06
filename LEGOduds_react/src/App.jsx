import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Contentpage from './components/Contentpage'
import Nav from './components/Nav'

function App() {
const [amount, setAmount] = useState(0)
const [category, setCategory] = useState("Ninjago")
const [cart, setCart] = useState([])

  return (
    <div id="container">
        <Header amount={amount} cart={cart} setCart={setCart}/>
        <Nav category={category}/>
        <Contentpage amount={amount} setAmount={setAmount} category={category} setCart={setCart} cart={cart}/>
    </div>
  )

}

export default App
