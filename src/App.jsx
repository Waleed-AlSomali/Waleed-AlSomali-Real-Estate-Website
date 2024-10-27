import React from 'react';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';

import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Profile from './pages/Profile';
import AddProperty from './Components/AddProperty';
import UpdateProperty from './Components/UpdateProperty';
import PropertyDetails from './pages/PropertyDetails';


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
                path:  '/add-property',
                element: <AddProperty />
            },
            {
                path: '/edit-property',
                element: <UpdateProperty />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
              path: '/profile',
              element: <Profile />
            },
            {
              path: '/properties/:id',
              element: <PropertyDetails />
            },
          ],
        },      
      ]);

        return (
            <RouterProvider router={router} />
          )
};

export default App;