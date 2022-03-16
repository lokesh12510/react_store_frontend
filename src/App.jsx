import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser)
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/products/:category' component={ProductList}/>
        <Route path='/product/:id' component={Product}/>
        <Route path='/login'>{user ? <Redirect to="/"/> : <Login/>}</Route>
        <Route path='/register'>{user ? <Redirect to="/"/> : <Register/>}</Route>
        <Route path='/cart' component={Cart}/>
      </Switch>
    </Router>
  );
};

export default App;