import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Sidebar from './shared/Sidebar/Sidebar';
import Header from './pages/Header/Header';

const App = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <main className="w-100 flex-grow-1">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default App;
