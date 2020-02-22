import React from 'react';

import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    );
}
export default Home