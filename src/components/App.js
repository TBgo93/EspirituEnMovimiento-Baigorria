import React from 'react';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function App() {
  return (
    <>
      <NavBar />
      <ItemDetailContainer id={3}/>
      <ItemListContainer greeting="Proximamente! Catalogo de productos" />
    </>
  );
}