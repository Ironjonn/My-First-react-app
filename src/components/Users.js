import React from 'react';
import axios from 'axios';


const Users = () => {



     axios.get('http://localhost:4000/api/users').then(resultado=>{
        console.log(resultado.data);
       
    }).catch(console.log);
 


    /* axios.post('http://localhost:4000/api/users', {
        Nombre: "juanito",
        Apellido1: "putito",
        Apellido2: "jotito",
        Perfil: "cajera"
    }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        }); */


    return (
        <div>
            <div>Users</div>
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
        </div>
    );
}

export default Users;