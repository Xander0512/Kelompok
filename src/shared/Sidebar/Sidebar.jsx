import React from 'react';

const Sidebar = ({ navigateTo }) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: '250px', height: '100vh' }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">Futsal Booking</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link text-white" onClick={() => navigateTo('home')}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white" onClick={() => navigateTo('futsal')}>
            Login
          </a>
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;
