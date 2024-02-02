import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './Utilities/Navbar';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registeration from './Auth/Registeration';
import LoginPage from './Auth/LoginPage';

function App() {
  return (
   
    
        
    <BrowserRouter>
    <Navbar /> 
    <Switch>

          <Route exact path={"/"} component={Home} />
          <Route exact path={"/home"} component={Home} />
          <Route exact path={"/login"} component={LoginPage} />
          <Route exact path={"/signup"} component={Registeration} />

    </Switch>
    </BrowserRouter>



  );
}

export default App;
