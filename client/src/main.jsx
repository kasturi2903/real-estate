import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./index.scss";

// Import the AuthContextProvider
import { AuthContextProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap your app with AuthContextProvider */}
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
);
