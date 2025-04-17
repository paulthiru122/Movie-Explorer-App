import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigator = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('handleSearch triggered'); // Debugging
    const query = e.target.search.value.trim();
    console.log('Search Query:', query); // Debugging the query
    if (query) {
      e.target.reset();
      navigator(`/search?q=${query}`);
      console.log('Navigating to:', `/search?q=${query}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-md sticky-top bg-primary mb-3 navbar-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <i className="bi bi-film"></i> Movie Hunt
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto me-2 mb-md-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/top" className="nav-link">
                Top Rated
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/popular" className="nav-link">
                Popular
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/upcoming" className="nav-link">
                Upcoming
              </NavLink>
            </li>
          </ul>
          <form onSubmit={handleSearch}>
            <input
              type="search"
              id="search"
              name="search"
              className="form-control"
              placeholder="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};
