import instance from './axios';
import React, { useState, useEffect } from 'react';
import './Row.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const getImage = movie =>{
    const imageType = isLargeRow ? movie.poster_path :  movie.backdrop_path;
    return `${base_url}${imageType}`;
  };
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map((movie) => (
          <img
            className='row__poster'
            key={movie.id}
            src={getImage(movie)}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
