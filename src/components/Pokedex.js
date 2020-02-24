
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';


const Pokedex = () => {

    

   /*  fetch('https://pokeapi.co/api/v2/pokemon/25')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            
            let listItems = Object.values(data)
             numeros.obj = numeros.pokemonRes[13] 
            
            
        })
        .catch(function (err) {
            console.error(err);
        })    */


    
   
   

   
    
  
  
   

    return (
        <div>
            <Navbar />
           
           
            <Card pokemon="Charizard" imagen="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" tipo="Fuego"/> 
            <Card pokemon="Blastoise" imagen="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" tipo="Agua"/> 
            <Card pokemon="Graveler" imagen="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png" tipo="Roca"/> 
           
         
        

          
        </div>
    );
}

export default Pokedex;