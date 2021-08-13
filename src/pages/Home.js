import React from 'react'
import ItemListContainer from '../components/ItemListContainer' 

function Home() {
  return (
    <>
      <h1 className="text-center m-3">Catalogo de producto</h1>
      <ItemListContainer greeting="rutinas" />
      <ItemListContainer greeting="clases" />
    </>
  )
}

export default Home