import React from 'react';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';

import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import Navbar from './layout/NavBar'
import Home from "./pages/Home";
import Profile from './pages/Profile';
import AddProperty from './Components/AddProperty';
import PropertyDetails from './pages/PropertyDetails';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import UserProperties from './components/UserProperties';
import ProtectedRoutes from './routes/ProtectedRoutes';

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
          path: '/add-property',
          element: <AddProperty />
        },
        // {
        //     path: '/edit-property',
        //     element: <UpdateProperty />
        // },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/logout',
          element: <Home />
        },
        {
          path: '/profile',
          element: <Profile />
        },
        {
          path: '/properties/:id',
          element: <PropertyDetails />
        },
        {
          path: '/dashboard',
          element: <ProtectedRoutes />,
          children: [
            {
              path: 'users',
              element: <UserDashboard />
            },
            {
              path: 'properties',
              element: <UserProperties />
            },
          ],
        },
        {
          path: '/dashboard/admins',
          element: <AdminDashboard />
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
};

export default App;