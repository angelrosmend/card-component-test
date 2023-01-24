import React from 'react';
import { ProductsContextProvider } from './context/ProductsContext';
import ProductsList from './pages/ProductList/ProductsList';
import AppRoutes from './routes/Routes';
import styles from "./styles/App.module.scss"

function App() {

  return (
    <ProductsContextProvider>
      <div className={styles.appContainer}>
        <ProductsList/>
      </div>
    </ProductsContextProvider>
  );
}

export default App;