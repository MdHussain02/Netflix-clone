import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NetflixHome.css'; // Custom CSS for styling
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

// Navbar Component
const Navbar = () => (
  <nav className="navbar">
    <h2 className="navbar__logo">Netflix</h2>
    <div className="navbar__links">
      <a href="#home">Home</a>
      <a href="#tvshows">TV Shows</a>
      <a href="#movies">Movies</a>
      <a href="#latest">Latest</a>
      <a href="#mylist">My List</a>
    </div>
  </nav>
);

// Featured Component
const Featured = ({ movie }) => (
  <div className="featured" style={{ backgroundImage: `url(${movie?.backdrop_path})` }}>
    <div className="featured__content">
      <h1 className="featured__title">{movie?.title || movie?.name}</h1>
      <p className="featured__description">{movie?.overview}</p>
      <div className="featured__buttons">
        <button className="btn btn--play">
          <FaPlay /> Play
        </button>
        <button className="btn btn--info">
          <FaInfoCircle /> More Info
        </button>
      </div>
    </div>
  </div>
);

// Row Component for Displaying Movie Grid
const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          <img
            key={movie.id}
            className="row__poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.name || movie.title}
          />
        ))}
      </div>
    </div>
  );
};

// Main NetflixHome Component
const NetflixHome = () => {
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    async function fetchFeaturedMovie() {
      const request = await axios.get(`API_URL_FOR_TRENDING_MOVIE`);
      setFeaturedMovie(request.data.results[0]);
    }
    fetchFeaturedMovie();
  }, []);

  return (
    <div className="netflixHome">
      <Navbar />
      {featuredMovie && <Featured movie={featuredMovie} />}
      <Row title="Trending Now" fetchUrl="API_URL_FOR_TRENDING_MOVIES" />
      <Row title="Top Rated" fetchUrl="API_URL_FOR_TOP_RATED_MOVIES" />
      <Row title="Action Movies" fetchUrl="API_URL_FOR_ACTION_MOVIES" />
      <Row title="Comedy Movies" fetchUrl="API_URL_FOR_COMEDY_MOVIES" />
    </div>
  );
};

export default NetflixHome;
