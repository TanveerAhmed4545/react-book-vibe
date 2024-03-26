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
import ReadBooks from './components/ReadBooks/ReadBooks';
import WishBooks from './components/WishBooks/WishBooks';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/listed-details/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('./data.json'),
      },
      {
        path: "/listed",
        element: <Listed></Listed>,
        loader: () => fetch('./data.json'),
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks> ,
            loader: () => fetch('./data.json'),
          },
          {
            path: 'wishlist',
            element: <WishBooks></WishBooks> ,
            loader: () => fetch('./data.json'),
          }
        ]
      },
      
      {
        path: "/read",
        element: <PageToRead></PageToRead>,
        loader: () => fetch('./data.json'),
      },
      {
        path: "/about",
        element: <About></About>,
       
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
        
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
     <ToastContainer />
  </React.StrictMode>,
)
