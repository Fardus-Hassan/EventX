import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Routes from './Route/Routes.jsx';
import { Toaster } from 'react-hot-toast';
import GlobalContext from './Global/GlobalContext.jsx';
import Spinner from './components/Spinner'; // Import your loading spinner component
import './index.css';

const Main = () => {
 

  return (
    <React.StrictMode>
        <GlobalContext>
          <RouterProvider router={Routes} />
          <Toaster position="top-center" reverseOrder={false} />
        </GlobalContext>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
