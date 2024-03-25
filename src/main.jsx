import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import BookDetails from './components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/listed-details/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../public/data.json'),
      },
      {
        path: "/listed",
        element: <h2>Listed Books</h2>,
      },
      
      {
        path: "/read",
        element: <h2>Pages to Read</h2>,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
