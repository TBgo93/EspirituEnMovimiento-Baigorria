import React from 'react';
import Router from '../router/Router';
import { CartProvider } from '../context/cartContext';
import { WishListProvider } from '../context/wishListContext';
import 'semantic-ui-css/semantic.min.css'
import './App.css'

export default function App() {
  return (
    <>
      <WishListProvider>
        <CartProvider>
          <Router />
        </CartProvider>
      </WishListProvider>
    </>
  );
}