import {products} from '../assets/legoduds'
import Title from './Title'
import ProductCard from './ProductCard'

export default function Contentpage ({amount, setAmount, category}) {
    return(<main>
        <Title category={category} />
        {products.map(product => 
        <ProductCard 
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