import React from 'react';
import Navbar from '../components/Navbar';

const Pokedex = () => {


    /* fetch('https://pokeapi.co/api/v2/pokemon/1')
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            console.log('data = ', data);
        })
        .catch(function (err) {
            console.error(err);
        }); */


    return (
        <div>
            <Navbar />
          
        </div>
    );
}

export default Pokedex;