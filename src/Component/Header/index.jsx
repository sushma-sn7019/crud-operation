import logo from '../../Images/AIT.jpg';
import {Link} from 'react-router-dom';
import './header.css';
let Header=()=>{
    return(
        <>
         <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="AchieversIT" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
          <ul className="navbar-nav font-25"> 
            <li className="nav-item pl-3">     
            <Link to="/form">     
                Form
                </Link> 
            </li>    
            <li className="nav-item pl-3">     
            <Link to="/read">     
                Read
           </Link> 
            </li>    
          </ul>
        </div>
      </div>
    </nav>
        </>
    )
}
export default Header;