import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";  // version ^6.4.2 (16/10/2022)
import { ChakraProvider } from '@chakra-ui/react'
import Layout from './components/Layout';
import {
  About, Contact, Home, ListPosts, PostDetail, PostForm
} from './pages';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // element: <Layout>Welcome to Toshiba Blog</Layout>,
    // index: <Home/>,
    errorElement: <div>404 - Page not found</div>,
    children: [
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/posts',
        element: <ListPosts />
      },
      {
        path: '/posts/add',
        element: <PostForm />
      },
      {
        path: '/posts/:postId',
        element: <PostDetail />
      },
      {
        path: '/posts/:postId/edit',
        element: <PostForm />
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
