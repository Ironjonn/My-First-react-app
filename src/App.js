import React from 'react';

//Rutas Modulo
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Estilo 
import './App.css';

//Componentes
import Formulario from './components/Formulario';
import Productos from './components/Productos';
import Home from './components/Home';
import Users from './components/Users';
import Notas from './components/Notas';
import Navbar from './components/Navbar';
import Servicios from './components/Servicios';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container p-4">
        <Route path="/" exact component={Home} />
        <Route path="/Formulario" exact component={Formulario} />
        <Route path="/Productos" exact component={Productos} />
        <Route path="/Users" exact component={Users} />
        <Route path="/Notas" exact component={Notas} />
        <Route path="/Servicios" exact component={Servicios} />
        <Route path="/Pokedex" exact component={Pokedex} />
      </div>
    </Router>
  );
}

export default App;
