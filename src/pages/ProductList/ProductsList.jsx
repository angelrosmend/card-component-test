import React from 'react'
import useFetch from '../../components/hooks/useFetch'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from "./productList.module.scss"

function ProductsList() {
  const [data] = useFetch({url:"https://my-json-server.typicode.com/angelrosmend/card-component-test/products"})

  console.log(data)
  return (
    <div className={styles.listContainer}>

    </div>
  )
}

export default ProductsList