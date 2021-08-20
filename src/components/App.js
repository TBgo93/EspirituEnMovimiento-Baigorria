import React from 'react';
import Router from '../router/Router';
import { CartProvider } from '../context/cartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function App() {
  return (
    <>
      <CartProvider>
        <Router />
      </CartProvider>
    </>
  );
}