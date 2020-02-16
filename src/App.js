import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Formulario from './components/Formulario';
import Productos from './components/Productos';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Home />
      <div className="container p-4">
      
        <Route path="/create" component={Productos} />
        <Route path="/user" exact component={Formulario} />
      </div>
    </Router>
  );
}

export default App;
