import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import DefaultLayout from '../layouts/DefaultLayout';

const AppRoutes = () => {
    return (
        <Routes>
            {/* مسیر صفحه اصلی */}
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/restaurant/:restaurantId/product/:productId" element={<ProductPage />} />
            </Route>

        </Routes>
    );
};

export default AppRoutes;
