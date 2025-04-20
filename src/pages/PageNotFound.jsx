import React from 'react';
import notfound from '../assets/404.avif';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
 

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <img
        src={notfound || 'https://via.placeholder.com/500x300?text=Image+Not+Found'}
        alt="404 Not Found"
        className="img-fluid"
      />
      <p className="text-center mt-4">
        <Link to="/" className="btn btn-danger">Go to Home Page</Link>
      </p>
    </div>
  );
};
