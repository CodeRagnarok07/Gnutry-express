// import ReactDOM from 'react-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './index.jsx'

    



const root = createRoot( document.getElementById('app')); 
root.render(<App tab="home" />);