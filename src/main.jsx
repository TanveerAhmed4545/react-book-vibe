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
import Listed from './components/Listed/Listed';
import PageToRead from './components/PageToRead/PageToRead';

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
        element: <Listed></Listed>,
        loader: () => fetch('../public/data.json'),
      },
      
      {
        path: "/read",
        element: <PageToRead></PageToRead>,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
