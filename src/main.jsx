import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index, { loader as customersLoader } from './pages/Index';
import Layout from './components/Layout';
import NewCustomer, { action as newCustomerAction } from './pages/NewCustomer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: customersLoader
      },
      {
        path: '/customers/new',
        element: <NewCustomer />,
        action: newCustomerAction
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider 
      router = {router}
    />
  </React.StrictMode>,
)
