import React from 'react';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';

import AddPropertyPage from "./pages/AddPropertyPage";
import EditPropertyPage from "./pages/EditPropertyPage";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";

const App = () => {

    const router = createBrowserRouter([
        {
          path: '/',
          element: <Navbar />,
          errorElement: <ErrorPage />,
          children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/addpropertypage',
                element: <AddPropertyPage />
            },
            {
                path: '/editPropertyPage',
                element: <EditPropertyPage />
            },
            {
                path: '/login',
                element: <Login />
            },
            
          ],
        },      
      ]);

        return (
            <RouterProvider router={router} />
          )
};

export default App;