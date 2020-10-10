import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
import ProductsListing from './components/ProductsListing';
import ShopingCart from './components/cart/ShopingCart';
import data from './data';



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Products />}>
          <Route path='/' element={<ProductsListing data={data} />} />
          <Route path=':productId' element={<ProductDetails data={data} />} />
        </Route>
        <Route path='cart' element={<ShopingCart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
