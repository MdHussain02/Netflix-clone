import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row my-4">
      <h2 className="ms-4">{title}</h2>
      <div className="row__posters d-flex flex-wrap ms-4">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`} className="text-decoration-none">
            <img
              className="row__poster img-fluid m-2"
              src={`${BASE_IMAGE_URL}${movie.poster_path}`}
              alt={movie.name || movie.title}
              style={{ maxHeight: '300px', objectFit: 'contain' }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Row;
