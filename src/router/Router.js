import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import NavBar from '../components/NavBar'
import Home from '../pages/Home';
import NotFound from '../pages/404';
import Cart from '../pages/Cart';


function Router() {
  return(
    <>
      <BrowserRouter >
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/category/:id">
            <ItemListContainer />
          </Route>
          <Route path="/item/:id" >
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Router