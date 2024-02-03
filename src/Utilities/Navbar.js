import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

import './NavbarStyle.css';
import { useEffect, useState } from "react";



function Navbar({ isAuthenticated, onLogout }) {

    // ---------------------------Handle login ------------------------ //
    const history = useHistory();

    const handleLogout = () => {
        // Perform any logout logic (clear local storage, etc.)
        localStorage.removeItem("email");
        localStorage.removeItem("password");
    
            // Redirect to the login page
            history.push("/home");
                    
                // Trigger the parent component's logout handler
                onLogout();
            };

            // -----------------------Handel register li if login / logout -----------------/
              
                  // State to track whether localStorage.email is null
                  const [isLocalStorageEmpty, setIsLocalStorageEmpty] = useState(localStorage.email != null);
                                    
                useEffect(() => {
                    // Update the state when the component mounts
                    setIsLocalStorageEmpty(localStorage.email != null);
                }, []);


  

        return(
        <> 
       <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" to="#" style={{ color: 'white' }}>Ecommerce</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/home" style={{ color: 'white' }}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/home" style={{ color: 'white' }}>Categories</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/home" style={{ color: 'white' }}>shop</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/home" style={{ color: 'white' }}>Contactus</Link>
                </li>
              
               </ul>
               </div>
           </div>
           <nav style={{marginRight: '1rem'}}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" > 
                <li>
                    <Link className="nav-link signup_display" to="/signup" id="sign_item" style={{ display: isLocalStorageEmpty ? 'none' : 'block' ,  color: 'white'}}>signup</Link>
                </li>
                <li className="nav-item">
            {isAuthenticated ? (
              <button className="btn btn-link" onClick={handleLogout}>Logout</button>
            ) : (
              <Link className="nav-link" to="/login" style={{ color: 'white' }}>Login</Link>
            )}
          </li>
               </ul>
         </nav>
         </nav>
        
           </>     
            
        )
}

export default Navbar;