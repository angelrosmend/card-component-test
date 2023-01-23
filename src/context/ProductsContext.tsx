import React, { ReactNode, useContext} from 'react'
import useFetch from '../hooks/useFetch'
import { productsState } from '../types'


const initialState = {
        data: [],
        loading: false,
        error: false,
        errorMessage: null,
    }

const ProductsContext = React.createContext<(productsState)>(initialState)

interface providerProps {
    children: ReactNode,
}
export const ProductsContextProvider: React.FC<providerProps> = ({children}) => {
    
    const products_URL = "https://my-json-server.typicode.com/angelrosmend/card-component-test/products"
    
    const products = useFetch({url: products_URL,  initialState})

    return <ProductsContext.Provider value={{...products}}>
        {children}
    </ProductsContext.Provider>
}

export const useProductsContext = () => useContext(ProductsContext)




export default ProductsContext