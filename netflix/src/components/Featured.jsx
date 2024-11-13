import React from 'react';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';

const Featured = ({ movie }) => (
    <div
        className="featured d-flex align-items-end text-white position-relative"
        style={{ backgroundImage: `url(${BASE_IMAGE_URL}${movie?.backdrop_path})`, height: '60vh' }}
    >
        <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>
        <div className="featured__content position-relative z-index-1 p-4">
            <h1 className="featured__title">{movie?.title || movie?.name}</h1>
            <p className="featured__description">{movie?.overview}</p>
            <div className="d-flex gap-3">
                <button className="btn btn-danger">
                    <FaPlay /> Play
                </button>
                <button className="btn btn-secondary">
                    <FaInfoCircle /> More Info
                </button>
            </div>
        </div>
    </div>
);

export default Featured;
