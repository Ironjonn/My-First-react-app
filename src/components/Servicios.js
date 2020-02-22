import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Servicios = () => {
    




    /* fetch('https://taecel.com/app/api/getProducts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
           'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ "nip": "25d55ad283aa400af464", "key": "25d55ad283aa400af464c76d713c07ad" })
       
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log('data = ', data);
        })
        .catch(function (err) {
            console.error(err);
        });  */

  


 axios.get('http://localhost:4000/api/servicios').then(resultado=>{
      console.log(resultado.data);
     
  }).catch(console.log);



    

    return (
        <div>
            <Navbar />
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Servicios;