import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './Utilities/Navbar';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   
    
        
    <BrowserRouter>
    <Navbar /> 
    <Switch>

          <Route exact path={"/"} component={Home} />

    </Switch>
    </BrowserRouter>



  );
}

export default App;
