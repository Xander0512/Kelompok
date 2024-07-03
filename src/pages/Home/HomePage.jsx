import React from 'react';
import futsalImage from '../../assets/futsal-field.jpg'; 

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h1 className="display-4 mb-4">Welcome to the Futsal Booking App!</h1>
          <p className="lead">Book your favorite futsal fields with ease.</p>
          <button className="btn btn-primary btn-lg" >Explore Futsal Fields</button>
        </div>
        <div className="col-md-6">
          <img src={futsalImage} alt="Futsal Field" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
};

export default Home;
