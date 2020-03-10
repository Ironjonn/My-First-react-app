import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Tablas from './Tablas';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';




const Users = () => {



   
    const [Datausuarios, setDatausuarios] = useState([])

    console.log(Datausuarios);
    
    
  /*   const [grid, setgrid] = useState({
        columnDefs: [{
            headerName: "Make", field: "make"
        }, {
            headerName: "Model", field: "model"
        }, {
            headerName: "Price", field: "price"
        }],
        rowData: [{
            make: "Toyota", model: "Celica", price: 35000
        }, {
            make: "Ford", model: "Mondeo", price: 32000
        }, {
            make: "Porsche", model: "Boxter", price: 72000
        }]


    } ) */


    
    
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


     useEffect( () =>{
         axios
            .get('http://localhost:4000/api/users')
             .then(resultado => {
                 console.log(resultado.data);
                 setDatausuarios(resultado.data)
             }).catch(console.log); 
     }, []);





     
 
   

    


    return (
        <div>
            <Navbar />



          {/*   <div className="ag-theme-balham" style={{height: '500px',width: '600px'}}>
                <AgGridReact
                    enableRangeSelection={true}
                    enableFillHandle={true}
                    columnDefs={grid.columnDefs}
                    rowData={grid.rowData}>
                </AgGridReact>
            </div> */}
            
            <table class="table ">
                <thead class="bg-info">
                    <tr>
                        <th scope="col">_id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Apellido2</th>
                        <th scope="col">Perfil</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Borrar</th>
                    </tr>
                </thead>
                <tbody>

                    {
                    Datausuarios.map( data => (
                        
                        
                        <tr>
                            <th scope="row" key={data._id}>{data._id}</th>
                            <th scope="row" key={data.Nombre}>{data.Nombre}</th>
                            <th scope="row" key={data.Apellido1}>{data.Apellido1}</th>
                            <th scope="row" key={data.Apellido2}>{data.Apellido2}</th>
                            <th scope="row" key={data.Perfil}>{data.Perfil}</th>
                            <th scope="row"> <button className="btn btn-success">Editar</button></th>
                            <th scope="row"> <button className="btn btn-danger">Borrar</button></th>
                        
                        </tr>


                    ))}
                </tbody>
            </table>

                            <button></button>
   
            <div className="card text-center       text-light" style={{ width: "400px", backgroundColor: "#B8DAFF", zIndex: "5"}}>
                <div className="card-header bg-primary">
                        <h4>Ingrese un nuevo usuario</h4>
                    </div>
                            <form id="product-form" className="card-body text-center " onSubmit={enviarDatos} >
                        <div className="form-group">
                                    <input type="text" placeholder="Nombre" className="form-control text-center" name="Nombre" onChange={SetData}/>
                        </div>
                        <div className="form-group">
                                    <input type="text" placeholder="Apellido Materno" className="form-control text-center" name="Apellido1" onChange={SetData}/>
                        </div>
                        <div className="form-group">
                                    <input type="text" placeholder="Apellido Paterno" className="form-control text-center" name="Apellido2" onChange={SetData}/>
                        </div>
                        <div className="form-group">
                                    <input type="text" placeholder="Perfil" className="form-control text-center" name="Perfil" onChange={SetData} />
                        </div>
                        <div className="form-group">
                                    <button className="btn btn-success mt-3" type="submit">Continuar</button>
                        </div>
                    </form>
                </div>
            </div>

    );
}

export default Users;