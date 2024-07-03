import React from 'react';

const FutsalFieldList = ({ fields, handleBooking }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Pilih Lapangan Futsal</h2>
      <div className="row">
        {fields.map(field => (
          <div key={field.id} className="col-md-6 mb-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">{field.name}</h5>
                <p className="card-text">Lokasi: {field.location}</p>
                <p className="card-text">Harga: Rp {field.price.toLocaleString()}</p>
                <button className="btn btn-primary" onClick={() => handleBooking(field)}>Pesan Sekarang</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FutsalFieldList;
