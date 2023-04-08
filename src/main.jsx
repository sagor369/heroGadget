import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './component/Layout/Layout';
import Cart from './component/Cart/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <App></App>,
        loader: () => fetch('data.json')
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}></RouterProvider>
)
RouterProvider