import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './assets/styles/global.css';


const App = () => {
    return (
       
        <Router>
            <AppRoutes />
        </Router>
    );
    
};

export default App;