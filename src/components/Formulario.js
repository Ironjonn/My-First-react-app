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
        <div>
            <form className="container-sm mt-5" onSubmit={enviarDatos}>
                <input type="text" placeholder=" Ingrese su Usuario" className="form-control" name="usuario" onChange={SetData} ></input>
                <input type="text" placeholder="Ingrese su contraseña" className="form-control" name="contraseña" onChange={SetData}  ></input>
                <button className="btn btn-success" type="submit">Continuar</button>
            </form>
            <div> {datos.usuario} </div>
            <div> {datos.contraseña} </div>
        </div>
    );

}


export default Formulario;