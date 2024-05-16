import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Route/Routes.jsx'
import { Toaster } from 'react-hot-toast';
import GlobalContext from './Global/GlobalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContext>
      <RouterProvider router={Routes} />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </GlobalContext>
  </React.StrictMode>,
)
