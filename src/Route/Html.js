import React from 'react';
import { Outlet } from 'react-router-dom';

const Html = () => {
    return (
        <div>
            <h1 className="text-center bg-dark">HTML</h1><hr />
            <Outlet />
        </div>
    );
}

export default Html;

