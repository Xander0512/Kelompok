import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Sidebar from './shared/Sidebar/Sidebar';

const App = () => {
 
  return (
    <div>
       <Sidebar navigateTo={navigateTo} />
       <Headers />
      <Outlet /> 
    </div>
  );
}

export default App;
