import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = ({ navigateTo }) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: '250px', height: '100vh' }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">Futsal Arena Reservations</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
        <Link to="/HomePage" className="nav-link text-white">Home</Link>
        </li>
        <li>
        <Link to="/" className="nav-link text-white">Booking</Link>
        </li>
        <li className="nav-item">
        <Link to="/bookings" className="nav-link text-white">Booking List</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;
