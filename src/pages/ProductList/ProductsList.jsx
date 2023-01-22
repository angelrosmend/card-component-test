import { Triangle } from 'react-loader-spinner'
import { useProductsContext } from '../../context/ProductsContext'
import styles from "./productList.module.scss"
import colors from "../../styles/_colors.module.scss"
import Text from '../../components/Text/Text'
import ProductCard from '../../components/ProductCard/ProductCard'

function ProductsList() {
  const {data: products, loading, error} = useProductsContext()
  if(loading) return <Triangle color={colors.mainBlack}/>

  if(!products || products.length < 1) return <Text title>No products found</Text>

  if(error) return <Text subtitle> Ooops, something went wrong!</Text>

  return (
    <div className={styles.listContainer}>
      {products.map((item)=>{
         return <ProductCard key={item.id} item={item}/>
      })}
    </div>
  )
}

export default ProductsList