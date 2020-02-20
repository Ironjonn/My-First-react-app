import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/Formulario" className="nav-link">Formulario</Link>
                <Link to="/Productos" className="nav-link">Productos</Link>
                <Link to="/Users" className="nav-link">Users</Link>
                <Link to="/Notas" className="nav-link">Notas</Link>
                <Link to="/Servicios" className="nav-link">Servicios</Link>
                <Link to="/Pokedex" className="nav-link">Pokedex</Link>
            </nav>
        </div>
    );
}

export default Navbar;