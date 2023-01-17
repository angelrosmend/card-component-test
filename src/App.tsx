import React, { Fragment } from 'react';
import { favorite_off, favorite_on, star_off, star_on } from './components/Icon_svg';
import IconSVG from './components/Icon_svg/IconSVG';
import ProductsList from './components/ProductList/ProductsList';
import "./styles/main.scss"

function App() {

  return (
    <Fragment>
      <ProductsList/>
    </Fragment>
  );
}

export default App;