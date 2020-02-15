import React, { useState } from 'react';
import logo from '../logo.svg';
import '../App.css';

    const Formulario = () => {
        const [datos, setDatos] = useState({
            usuario: '',
            contraseña: '',
            mensage: '',
            src: ''
        
        });

    const SetData = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        });
    };

    const enviarDatos = (event) => {
        event.preventDefault();

        if (datos.usuario === 'teamhorda' && datos.contraseña === "123") {
            setDatos({
                ...datos,
                mensage: <h1 class=" alert-success" > Welcome {datos.usuario}!!</h1>
               
                    
            });
        } else {
            setDatos({
                ...datos,
                mensage: <h1 class=" alert-danger ">No valido el usuario!</h1>
            });
        }
    }

    return (
            <div className="container mt-5">    
            <div > 
                <img className="App-logo"   src={logo} ></img>
                </div>
                <form onSubmit={enviarDatos}  >
                    <div className="form-group">
                        <label for="exampleInputEmail1">Usuario</label>
                        <input type="text" placeholder=" Ingrese su Usuario" className="form-control" name="usuario" onChange={SetData} ></input>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input type="text" placeholder="Ingrese su contraseña" className="form-control" name="contraseña" onChange={SetData}  ></input>
                    </div>
                    <div className="form-group">    
                        <button className="btn btn-primary mt-3" type="submit">Continuar</button>
                    </div>
                    <div>{datos.mensage}</div>
                </form>
            </div>
         );

}


export default Formulario;