import React from 'react';
import Navbar from '../components/Navbar';
const Notas = () => {
    return (
        <div>
            <Navbar />
            <div>Notas</div>
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Notas;