import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Store from './Pages/Store';
import Success from './Pages/Success';
import Cancel from './Pages/Cancel';
import MainNav from './Components/MainNav';
import CartProvider from './CartContext';

import './App.css'


function App() {
  

  return (
    <CartProvider>
      <MainNav/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Store/>} />
        <Route path ="success" element={<Success/>} />
        <Route path ="cancel" element={<Cancel/>} /> 
      </Routes>
      </BrowserRouter> 
    </CartProvider>
  );
}

export default App
