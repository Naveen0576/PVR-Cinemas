import React from "react";
import "./MovieCard.css";
import placeholder from "../assets/MovieSearchResults/Error-Container/scene-clipper.png";

function MovieCard({ Poster, Title, Year }) {
  const isPosterAvailable = Poster && Poster !== "N/A";
  const posterSrc = isPosterAvailable ? Poster : placeholder;

  return (
    <div>
      <div className="card">
        {/* Poster or Placeholder */}
        <div className="poster-wrapper">
          <img
            src={posterSrc}
            alt={Title}
            className={`poster ${!isPosterAvailable ? "placeholder" : ""}`}
          />

          {/* Show "Poster Unavailable" text only when no poster */}
          {!isPosterAvailable && (
            <p className="poster-unavailable">Poster Unavailable</p>
          )}
        </div>
      </div>

      {/* Title and Year */}
      <div className="movie-info">
        <h3 className="movie-title">{Title}</h3>
        <span className="movie-year">{Year}</span>
      </div>
    </div>
  );
}

export default MovieCard;
