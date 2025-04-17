import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ movie }) => {
  const { poster_path, id, overview, title, vote_average, vote_count } = movie;

  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://via.placeholder.com/500';

  return (
    <div className="col">
      <div className="card shadow-sm" title={title}>
        <img
          src={image}
          alt={title}
          className="card-img-top"
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="card-body">
          <h5 className="card-title text-primary text-overflow-1">{title}</h5>
          <p
            className="card-text"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {overview}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <Link
              to={`/movie/${id}`}
              className="btn btn-sm btn-outline-primary stretched-link"
            >
              Read More
            </Link>
            <small>
              <i className="bi bi-star-fill text-warning"></i> {vote_average} |{' '}
              {vote_count}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};