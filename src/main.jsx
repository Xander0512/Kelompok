import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import Success from './shared/Success.jsx';
import BookingPage from './pages/Bookings/BookingPage/BookingPage.jsx';
import HomePage from './pages/Home/HomePage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/HomePage',
        element: <HomePage />
      },
      {
        path: '/bookings',
        element: <BookingPage />
      },
      {
        path: '/success',
        element: <Success />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
