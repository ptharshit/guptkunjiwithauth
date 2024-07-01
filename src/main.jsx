import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path:"/kunjiapp",
    element:<App/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Auth0Provider
    domain="ptharshit.us.auth0.com"
    clientId="YlbhOGcxlaKvDu1ewcLfbiOCQjKUAWpF"
    authorizationParams={{
      // redirect_uri: "https://guptkunji.netlify.app/"
      redirect_uri: `${window.location.origin}/kunjiapp`
    }}
  >
    <RouterProvider router={router} />
    <ToastContainer closeOnClick/>
  </Auth0Provider>,
);
  </>
)
