import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
        return (
            <div>
      
                <nav className="navbar navbar-expand-lg  navbar-dark bg-dark " >
                     
                <Link to="/Home" className="nav-link text-light">Home</Link>
                <Link to="/Productos" className="nav-link text-light">Productos</Link>
                <Link to={
                    {
                        pathname: "/Users",
                        state:{
                            from: "root"
                        }
                        
                    }
                    
                } className="nav-link text-light">Users</Link>
                
                
                
                
                <Link to="/Notas" className="nav-link text-light">Notas</Link>
                <Link to="/Servicios" className="nav-link text-light">Servicios</Link>
                <Link to="/Pokedex" className="nav-link text-light">Pokedex</Link>
                 
                    <Link to="/" className="nav-link text-light " style={{marginLeft: "600px"}}>Cerrar Sesion</Link>
            </nav>
        </div>
    );
}

export default Navbar;