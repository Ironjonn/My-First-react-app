import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';





const Users = () => {

    


    const [AgregarUsuarios, setAgregarUsuarios] = useState({
        Nombre: '',
        Apellido1: '',
        Apellido2: '',
        Perfil: ''

    });

    const SetData = (event) => {
        setAgregarUsuarios({
            ...AgregarUsuarios,
            [event.target.name]: event.target.value
        });
    };


   
    
    const enviarDatos = (event) => {
        event.preventDefault();
        axios.post('http://localhost:4000/api/users', 
        {
            Nombre: AgregarUsuarios.Nombre,
            Apellido1: AgregarUsuarios.Apellido1,
            Apellido2: AgregarUsuarios.Apellido2,
            Perfil: AgregarUsuarios.Perfil
        }).then(function (response) {
            console.log(response.data);
            alert(response.data);
        }).catch(function (error) {
            console.log(error);
        }); 

       
    }


     /* axios.get('http://localhost:4000/api/users').then(resultado=>{
        console.log(resultado.data);
       
    }).catch(console.log); */
 
   

    


    return (
        <div>
            <Navbar />
            <table className="table table-dark">
                <thead className="bg-primary">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>



   
            <div className="card bg-dark col-4 text-light"  >
                    <div className="card-header bg-primary">
                        <h4>Ingrese un nuevo usuario</h4>
                    </div>
                            <form id="product-form" className="card-body " onSubmit={enviarDatos} >
                        <div className="form-group">
                                    <input type="text" placeholder="Nombre" className="form-control" name="Nombre" onChange={SetData}/>
                        </div>
                        <div className="form-group">
                                    <input type="text" placeholder="Apellido Materno" className="form-control" name="Apellido1" onChange={SetData}/>
                        </div>
                        <div className="form-group">
                                    <input type="text" placeholder="Apellido Paterno" className="form-control" name="Apellido2" onChange={SetData}/>
                        </div>
                        <div className="form-group">
                                    <input type="text" placeholder="Perfil" className="form-control" name="Perfil" onChange={SetData} />
                        </div>
                        <div className="form-group">
                                    <button className="btn btn-primary mt-3" type="submit">Continuar</button>
                        </div>
                    </form>
                </div>



</div>

    );
}

export default Users;