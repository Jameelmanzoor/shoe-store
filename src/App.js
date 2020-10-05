import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Products />}>
          <Route path=':productId' element={<ProductDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
