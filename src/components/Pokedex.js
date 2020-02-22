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
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Pokedex;