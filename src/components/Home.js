import React from 'react';

import Navbar from '../components/Navbar';
import '../App.css';

const Home = () => {
    return (
        <div>
            <Navbar />
            
            <div class="espacio3D">
                <div class="cubo3D">
                    <div class="base"></div>
                    <aside class="cara cara1"></aside>
                    <aside class="cara cara2"></aside>
                    <aside class="cara cara3"></aside>
                    <aside class="cara cara4"></aside>
                    <aside class="cara cara5"></aside>
                    <aside class="cara cara6"></aside>
                </div>
            </div>
            
        </div>
    );
}
export default Home