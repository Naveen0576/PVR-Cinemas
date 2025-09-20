import React from "react";
import "./MovieCard.css";
import placeholder from "../assets/MovieSearchResults/Error-Container/scene-clipper.png";

function MovieCard({ Poster, Title, Year }) {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src={Poster === "N/A" ? placeholder : Poster}
          alt={Title}
          className={`poster ${Poster === "N/A" ? "placeholder" : ""}`}
        />
        {Poster === "N/A" && (
    <p className="poster-unavailable">Poster Unavailable</p>
  )}
      </div>
        <div className="card-data">
          <h3>{Title}</h3>
          <p>{Year}</p>
        </div>
    </div>
  );
}

export default MovieCard;
