import React, { Fragment } from 'react';
import ProductsList from './pages/ProductList/ProductsList';
import styles from "./styles/App.module.scss"

function App() {

  return (
    <div className={styles.appContainer}>
      <ProductsList/>
    </div>
  );
}

export default App;