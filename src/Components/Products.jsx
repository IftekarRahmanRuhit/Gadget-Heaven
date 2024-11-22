import { useLoaderData, useParams } from "react-router-dom"
import Product from "./Product"
import { useEffect, useState } from "react"


const Products = () => {
    const data = useLoaderData()
    const{category} = useParams()

    const[products, setProducts] = useState([])

    useEffect(()=>{
        if(category){
            const filterdProductByCategory = [...data].filter(product=> product.category === category)
            setProducts(filterdProductByCategory)
        }
        else{
            setProducts(data)
        }
    
    },[category, data])

   

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {
        products.map(product => <Product key={product.id} product={product}></Product>)
    }
    </div>
  )
}

export default Products
