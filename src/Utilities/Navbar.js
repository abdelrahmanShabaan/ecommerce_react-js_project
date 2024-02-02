import { Link } from "react-router-dom/cjs/react-router-dom.min";




function Navbar() {


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
               </ul>
               </div>
           </div>
           <nav style={{marginRight: '1rem'}}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" > 
                <li>
                    <Link className="nav-link" to="/login" style={{ color: 'white' }}>Login</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/home" style={{ color: 'white' }}>Signup</Link>
                </li>
               </ul>
         </nav>
         </nav>
        
           </>     
            
        )
}

export default Navbar;