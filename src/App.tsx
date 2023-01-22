import React from 'react';
import { ProductsContextProvider } from './context/ProductsContext';
import AppRoutes from './routes/Routes';
import styles from "./styles/App.module.scss"

function App() {

  return (
    <ProductsContextProvider>
      <div className={styles.appContainer}>
        <AppRoutes/>
      </div>
    </ProductsContextProvider>
  );
}

export default App;