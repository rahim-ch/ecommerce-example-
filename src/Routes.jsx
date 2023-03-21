import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';





import Navbar from './Navbar';
import Products from './Products';
import Search from './Search';
import Favorites from './Favorites';
import Cart from './Cart';

const Routes = () => {
return (
<Router>
<div>
<Navbar />
<div className="container mx-auto">
<Switch>
<Route exact path="/">
<Products />
</Route>
<Route path="/search">
<Search />
</Route>
<Route path="/favorites">
<Favorites />
</Route>
<Route path="/cart">
<Cart />
</Route>
</Switch>
</div>
</div>
</Router>
);
};

export default Routes;
