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
        <div>
            <form className="container-sm mt-5" onSubmit={enviarDatos}>
                <input type="text" placeholder=" Ingrese su Usuario" className="form-control" name="usuario" onChange={SetData} ></input>
                <input type="text" placeholder="Ingrese su contraseña" className="form-control" name="contraseña" onChange={SetData}  ></input>
                <button className="btn btn-primary mt-3" type="submit">Continuar</button>
            </form>
            <div> {datos.usuario} </div>
            <div> {datos.contraseña} </div>

        </div>

        <div>    
        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"> </input>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"> </input>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"> </input>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        </div>
     

         );

}


export default Formulario;