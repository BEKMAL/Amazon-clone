import React, { useEffect, useState } from 'react'
import classes from './Results.module.css'

import {useParams} from 'react-router-dom'
import axios  from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loder'
function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const {categoryName} =useParams()
  console.log(useParams());
  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res)=>{
       setResults(res.data)
       setIsLoading(false)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  
  return (
  
<>{
  isLoading?(<Loader/>):(
    <section>
    <h1 style={{ padding: "30px" }}>Results</h1>
    <p style={{ padding: "30px" }}>Category / {categoryName}</p>
    <hr />
      <div className={classes.products_container}>
        {results?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            renderDesc={false}
            renderAdd={true}
          />
        ))}
      </div>
  </section>
  )
}
</>

  )
}

export default Results