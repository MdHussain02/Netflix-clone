import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <a className="navbar-brand" href="#home">Netflix</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#tvshows">TV Shows</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#movies">Movies</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#latest">Latest</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#mylist">My List</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
