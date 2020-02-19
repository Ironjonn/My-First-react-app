import React from 'react';
import axios from 'axios';


const Servicios = () => {
    console.log("hola");






    axios.post('https://taecel.com/app/api/getProducts', {
        nip: "25d55ad283aa400af464",
        key: "25d55ad283aa400af464c76d713c07ad"
        
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });


    

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

export default Servicios;