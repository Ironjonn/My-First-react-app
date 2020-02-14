import React, { useState } from 'react';

const Formulario = () => {
    const [datos, setDatos] = useState({
        usuario: '',
        contraseña: ''

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
            alert('enviando datos...' + datos.usuario + ' ' + datos.contraseña)
            alert("se valido su usuario")
        } else {
            alert("no valido su usuario")

        }

    }

    return (
            <div className="container mt-5">    
                <div>
                    <img src=""></img>
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
                        <div> {datos.usuario} </div>
                        <div> {datos.contraseña} </div>
                        <button className="btn btn-primary mt-3" type="submit">Continuar</button>
                    </div>
                </form>
            </div>
         );

}


export default Formulario;