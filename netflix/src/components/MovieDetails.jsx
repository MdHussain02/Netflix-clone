import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaPlay } from 'react-icons/fa';

const API_KEY = 'YOUR_API_KEY';
const BASE_URL = 'https://api.themoviedb.org/3';
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';

const MovieDetails = () => {
    const { id } = useParams(); // Access the dynamic movie ID from URL
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchMovieDetails() {
            try {
                const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
                setMovie(response.data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        }
        fetchMovieDetails();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-details" style={{ backgroundImage: `url(${BASE_IMAGE_URL}${movie.backdrop_path})`, backgroundSize: 'cover', color: 'white' }}>
            <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>
            <div className="content position-relative z-index-1 p-4">
                <h1>{movie.title || movie.name}</h1>
                <p>{movie.overview}</p>
                <button className="btn btn-danger d-flex align-items-center">
                    <FaPlay /> Play
                </button>
                <button className="btn btn-secondary" onClick={() => navigate("/")}>Back to Home</button>
            </div>
        </div>
    );
};

export default MovieDetails;
