import React from 'react';

const Pokedex = () => {


    fetch('https://pokeapi.co/api/v2/pokemon/1')
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            console.log('data = ', data);
        })
        .catch(function (err) {
            console.error(err);
        });


    return (
        <div>
            <div>Pokedex</div>
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Pokedex;