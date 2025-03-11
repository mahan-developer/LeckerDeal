import React from 'react';
import { Outlet } from 'react-router-dom';

const NoLayout = () => {
    return (
        <div>
            <Outlet /> {/* محتوای صفحه */}
        </div>
    );
};

export default NoLayout;