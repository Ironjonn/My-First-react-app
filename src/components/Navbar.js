import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg';
const Navbar = () => {


    const hola = () => {
    alert("me diste click!!")
    }


        return (
            <div>
      
                <nav className="navbar navbar-expand-lg  navbar-dark  " style={{ backgroundColor: "#346CB0" }}>
                   
                <Link to="/Home" className="nav-link text-light">Home</Link>
                <Link to="/Productos" className="nav-link text-light">Productos</Link>
                <Link to={{ pathname: "/Users", state:{ from: "root"}}} className="nav-link text-light">Users</Link>
                <Link to="/Notas" className="nav-link text-light">Notas</Link>
                <Link to="/Servicios" className="nav-link text-light">Servicios</Link>
                <Link to="/Pokedex" className="nav-link text-light">Pokedex</Link>
                <Link to="/" className="nav-link text-light " style={{marginLeft: "460px"}}>Cerrar Sesion</Link>
                
                    <img className="bg-secondary" src={logo} style={{ width: "40px", height: "40px", borderRadius: "50%", marginLeft: "20px"}}></img>
                    <div onClick={hola} className="text-light" style={{ fontSize: "11px", marginLeft: "20px"}}>
                        <div>Ramon Gonzalez Casillas</div>
                        <div>Programador</div>
                    </div>
            </nav>
                
        </div>
    ); 
}

export default Navbar;