import React from 'react';
import Header from '../components/Header/Header';

import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
    return (
        <div>
            <Header />

            <main>
                <Outlet /> 
            </main>

            <Footer />
        </div>
    );
};

export default DefaultLayout;
