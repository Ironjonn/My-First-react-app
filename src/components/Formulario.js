import React, { useState } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Formulario = () => {

    let history = useHistory();
        
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

        axios.get('http://localhost:4000/api/users/' + datos.usuario).then(resultado => {
            console.log(resultado.data);


            if (resultado.data.length > 0) {
                setDatos({
                    ...datos,
                    mensage: history.push("/home")
                });
                alert("Welcome" +  datos.usuario)
            }else{

                alert("no tiene derecho abrigese")
            }

        }).catch(console.log);


            
           
       
    }

  

    

    return (
        <div className="text-center container" >    
            
            <form className="form-signin" onSubmit={enviarDatos}  >
                <img className="App-logo" src={logo} ></img>
                <div className="form-group">
                    <label for="exampleInputEmail1">Usuario</label>
                    <input style={{ width: "300px", marginLeft: "36%" }} class="text-center form-control mr-auto" type="text" placeholder=" Ingrese su Usuario" name="usuario" onChange={SetData} ></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input style={{ width: "300px", marginLeft: "36%" }} type="text" placeholder="Ingrese su contraseña" className="text-center form-control" name="contraseña" onChange={SetData}  ></input>
                </div>
                <div className="form-group">    
                    <button style={{ width: "200px", marginLeft: "40%" }} class="btn  btn-primary btn-block" type="submit">Continuar</button>
                </div>
                <div>{datos.mensage}</div>
            </form>
        </div>
         );

}


export default Formulario;