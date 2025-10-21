import React, { useEffect, useState } from 'react';
import "../css/Row.css";
import axios from '../localAxios.js';

function Row({ title, isLargeRow, fetchURL }) {
  const [movies, setMovie] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map(movie => (
          <img
            key={movie.id} // ✅ corrected key prop
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie?.name || movie?.title || "Movie poster"} // ✅ added alt prop
            className={`rowposter ${isLargeRow && "largeImage"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
