import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ field, handleConfirmBooking, handleClose }) => {
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleConfirmBooking(bookingData);
    navigate('/bookings');
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Formulir Pemesanan Lapangan {field.name}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nama</label>
          <input type="text" className="form-control" id="name" name="name" value={bookingData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Telepon</label>
          <input type="tel" className="form-control" id="phone" name="phone" value={bookingData.phone} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Tanggal</label>
          <input type="date" className="form-control" id="date" name="date" value={bookingData.date} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">Waktu</label>
          <input type="time" className="form-control" id="time" name="time" value={bookingData.time} onChange={handleChange} required />
        </div>
        <div className="text-end">
          <button type="submit" className="btn btn-primary mr-2">Konfirmasi Pemesanan</button>
          <button type="button" className="btn btn-secondary" onClick={handleClose}>Batal</button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
