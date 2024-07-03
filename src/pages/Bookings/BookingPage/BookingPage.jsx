import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookingList from './components/BookingList';
import { deleteBooking } from '../../../store';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const bookings = useSelector((state) => state.bookings);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteBooking = (id) => {
    dispatch(deleteBooking(id));
  };

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Daftar Hasil Booking Lapangan Futsal</h2>
      <BookingList bookings={bookings} handleDelete={handleDeleteBooking} />
    </div>
  );
};

export default BookingPage;
