import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index, { loader as customersLoader } from './pages/Index';
import Layout from './components/Layout';
import NewCustomer, { action as newCustomerAction } from './pages/NewCustomer';
import ErrorPage from './components/ErrorPage';
import EditCustomer, { loader as editCustomerLoader, action as editCustomerAction } from './pages/EditCustomer';
import { action as destroyCustomerAction } from './components/Customer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: customersLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/customers/new',
        element: <NewCustomer />,
        action: newCustomerAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/customers/:customerId/edit',
        element: <EditCustomer />,
        loader: editCustomerLoader,
        action: editCustomerAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/customers/:customerId/destroy',
        action: destroyCustomerAction
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
