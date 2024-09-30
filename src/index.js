import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Services from './services'; // Corrected import statement
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';
import Aboutus from './About';
import Home from './Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const PUBLISHABLE_KEY = 'pk_test_Y2FwYWJsZS1kb2ctNC5jbGVyay5hY2NvdW50cy5kZXYk';

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/aboutus",
    element: <Aboutus />
  },
  {
    path: "/services",
    element: <Services /> // Changed to capitalized component
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router} />
  </ClerkProvider>
);
