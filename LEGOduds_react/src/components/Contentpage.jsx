import {products} from '../assets/legoduds'
import Title from './Title'
import ProductCard from './ProductCard'

export default function Contentpage ({amount, setAmount, category, setCart, cart}) {
    return(<main>
        <Title category={category} />
        {products.map(product => 
        <ProductCard 
        cart={cart}
        setCart={setCart}
        prodid={product.prodid}
        key={product.prodid} 
        category={product.category} 
        title={product.title} 
        img={product.imagefile} 
        price={product.price}
        amount={amount}
        setAmount={setAmount}
        /> )}
      </main>)
}