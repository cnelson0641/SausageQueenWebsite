// Amplify
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// App and styling
import './index.css';
import App from './App';

// Run the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

