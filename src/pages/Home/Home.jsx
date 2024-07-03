import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Login from '../Auth/Login.jsx';
import FutsalFieldList from './components/FutsalFieldList.jsx';
import BookingForm from '../Bookings/BookingForm.jsx';
import { addBooking } from '../../store.js';
import { login } from '../../store.js';
import { useState } from 'react';

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = (isLoggedIn) => {
    if (isLoggedIn) {
      dispatch(login());
    }
  };

  const [fields] = useState([
    { id: 1, name: 'Lapangan A', location: 'Jakarta', price: 200000 },
    { id: 2, name: 'Lapangan B', location: 'Bandung', price: 150000 },
    { id: 3, name: 'Lapangan C', location: 'Surabaya', price: 180000 },
    { id: 4, name: 'Lapangan D', location: 'Yogyakarta', price: 160000 },
  ]);

  const [bookingField, setBookingField] = useState(null);

  const handleBooking = (field) => {
    setBookingField(field);
  };

  const handleConfirmBooking = (bookingData) => {
    dispatch(addBooking(bookingData));
    setBookingField(null);
    navigate('/bookings');
  };

  const handleCloseForm = () => {
    setBookingField(null);
  };

  const navigateToBookings = () => {
    navigate('/bookings');
  };

  return (
    <div className="container-fluid pt-4 px-4 position-relative">
      <div className="text-center text-secondary p-1">
        
      </div>
      {authenticated ? (
        <>
          {!bookingField ? (
            <>
              <FutsalFieldList fields={fields} handleBooking={handleBooking} />
            </>
          ) : (
            <BookingForm
              field={bookingField}
              handleConfirmBooking={handleConfirmBooking}
              handleClose={handleCloseForm}
            />
          )}
        </>
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </div>
  );
}
