import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Featured from './components/Featured';
import Row from './components/Row';
import MovieDetails from './components/MovieDetails';
import axios from 'axios';

const API_KEY = 'a24d44c504e8cfa81c4116f0f07bd6f5';
const BASE_URL = 'https://api.themoviedb.org/3';

function App() {
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    async function fetchFeaturedMovie() {
      try {
        const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
        setFeaturedMovie(response.data.results[0]);
      } catch (error) {
        console.error("Error fetching featured movie:", error);
      }
    }
    fetchFeaturedMovie();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {featuredMovie && <Featured movie={featuredMovie} />}
                <Row title="Trending Now" fetchUrl={`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`} />
                <Row title="Top Rated" fetchUrl={`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`} />
                <Row title="Action Movies" fetchUrl={`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`} />
                <Row title="Comedy Movies" fetchUrl={`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`} />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
