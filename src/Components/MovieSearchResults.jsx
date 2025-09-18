import { useState, useEffect } from "react";
import "./MovieSearchResults.css";
import MovieCard from "../Components/Moviecard";
import popcornimg from "../assets/MovieSearchResults/Error-Container/Popcorn.png";

function MovieSearchResults({ bool, list }) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    setPage(1);
  }, [list]);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = list ? list.slice(startIndex, endIndex) : [];

  return (
    <>
      {bool && list && list.length > 0 ? (
        <div className="MovieGrid">
          {currentItems.map((movie, i) => (
            <MovieCard
              key={movie.imdbID || i}
              Poster={movie.Poster}
              Title={movie.Title}
              Year={movie.Year}
            />
            
          ))}
        </div>
      ) : (
        <div className="error-container">
          <p className="error-message">
            <span className="E404">404&nbsp;</span>No Data Found !
          </p>
          <img src={popcornimg} alt="popcorn-img" className="popcorn-img" />
        </div>
      )}
    </>
  );
}

export default MovieSearchResults;
