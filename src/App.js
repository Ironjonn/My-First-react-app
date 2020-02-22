import React from 'react';

//Rutas Modulo
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Estilo 
import './App.css';

//Componentes
import Formulario from './components/Formulario';
import Productos from './components/Productos';
import Home from './components/Home';
import Users from './components/Users';
import Notas from './components/Notas';

import Servicios from './components/Servicios';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <Router>
     
      <Switch>
        <Route path="/Home" exact component={Home} />
     
        <Route path="/"  exact component= {Formulario} />
        <Route path="/Productos" exact component={Productos} />
        <Route path="/Users" exact component={Users} />
        <Route path="/Notas" exact component={Notas} />
        <Route path="/Servicios" exact component={Servicios} />
        <Route path="/Pokedex" exact component={Pokedex} />
      </Switch>
    </Router>
  );
}

export default App;
