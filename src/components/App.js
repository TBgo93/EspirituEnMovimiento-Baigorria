import React from 'react';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Proximamente! Catalogo de productos" />
    </>
  );
}