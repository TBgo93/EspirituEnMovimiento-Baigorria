import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import NavBar from '../components/NavBar'
import Home from '../pages/Home';
import NotFound from '../pages/404';
import Cart from '../pages/Cart';
import WishList from '../pages/WishList';
import CheckOut from '../pages/CheckOut';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Userpanel from '../pages/Userpanel';
import NewPassword from '../pages/NewPassword'



function Router() {
  return(
    <>
      <BrowserRouter >
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/categories/:id">
            <ItemListContainer />
          </Route>
          <Route path="/item/:id" >
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/wishlist">
            <WishList />
          </Route>
          <Route path="/checkout">
            <CheckOut />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/userpanel">
            <Userpanel />
          </Route>
          <Route path="/newpassword">
            <NewPassword />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Router