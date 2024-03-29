import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './Utilities/Navbar';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registeration from './Auth/Registeration';
import LoginPage from './Auth/LoginPage';
import CartPage from './Pages/CartPage';
import OneProductCart from './Components/OneProductCart';
import FavoritesPage from './Pages/FavoritesPage';
import categoriesPage from './Pages/categoriesPage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  
  
   //-----------------Handle login / logout --------------------//
   const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem("email") && localStorage.getItem("password"))
  );

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  
  
  return (
         
    <BrowserRouter>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
    <Switch>

          <Route exact path={"/"} component={Home} />
          <Route exact path={"/home"} component={Home} />
          <Route path="/login"> <LoginPage onLogin={() => setIsAuthenticated(true)} />  </Route>
          <Route exact path={"/signup"} component={Registeration} />
          <Route exact path={"/cart"} component={CartPage} />
          <Route exact path={"/cartsdata/:id"} component={OneProductCart} />
          <Route exact path={"/whishlist"} component={FavoritesPage} />
          <Route exact path={"/categories_page"} component={categoriesPage} />
          <Route exact path={"*"} component={NotFoundPage}/>




    </Switch>
    </BrowserRouter>



  );
}

export default App;
