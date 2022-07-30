import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Navbar,Nav,NavDropdown ,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends Component {

    render() {
        return (
            <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
            <div className = 'container'>
                <Navbar.Brand >
                       <a href = "/"><img src="./image/logo.png" width = '100%' height = 'auto' alt="logo-pn" border="0" className = 'logoImage' /></a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                 <Nav className="ml-auto">
                     <Nav.Link >  
                           <Link to="/pricing"  className="nav-item"> PRICING </Link>
                      </Nav.Link>
                     <Nav.Link >  
                            <Link to="/faq"  className="nav-item"> FAQ </Link>
                      </Nav.Link>
                      <Nav.Link > 
                          <Link to="/about-us"  className="nav-item" >ABOUT US</Link>
                      </Nav.Link>  
                    <NavDropdown 
                            eventKey={3} 
                            menuAlign="left"
                            id="dropdown-menu-align-left"
                            className = "NavDropdown"
                            title={ 
                                <span className="nav-item" >SPACIALS</span> 
                            }
                            >
                        <Nav.Link >  
                            <Link to="/"  className="nav-item">GIVEAWAY </Link>
                      </Nav.Link>
                     <Nav.Link >  
                            <Link to="/"  className="nav-item">DIAMOND CLUB </Link>
                      </Nav.Link>
                    </NavDropdown>
         
             </Nav>  
            <Nav className="menu-signin-signup">  
                       <Nav.Link >  
                                 <Link to="/sign-in"  className="nav-item signin"> SIGN IN </Link>
                      </Nav.Link> 
                      <Nav.Link >  
                                 <Link to="/sign-up"  className="nav-item signup"> SIGN UP </Link>
                      </Nav.Link> 
            </Nav>
           </Navbar.Collapse>

           </div>
       </Navbar>
       </div>
        );
    }
}

export default Header;