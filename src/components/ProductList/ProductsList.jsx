import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import styles from "./productList.module.scss"

function ProductsList() {
  return (
    <div className={styles.listContainer}>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>

    </div>
  )
}

export default ProductsList