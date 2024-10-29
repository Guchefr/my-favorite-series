import React from 'react';

interface SeriesCardProps {
  title: string;
  creator?: string;
  releaseDate?: string;
  genre?: string;
  image: string;
  description: string;
  trailerUrl?: string;
}

function SeriesCard({ title, creator, releaseDate, genre, image, description, trailerUrl }: SeriesCardProps) {
  const autoplayUrl = trailerUrl ? `${trailerUrl.replace("watch?v=", "embed/")}?autoplay=1` : '';
  return (
    <div className="series-card">
      <img src={image} alt={`${title} poster`} className="series-image" />
      <div className="series-details">
        <h2>{title}</h2>
        {creator && <p>Creator: {creator}</p>} {/* Display creator only in card view */}
        {releaseDate && <p>Released: {releaseDate}</p>} {/* Display release date only in card view */}
        {genre && <p>Genre: {genre}</p>} {/* Display genre only in card view */}
        <p>{description}</p>
        {trailerUrl && (
          <iframe
            width="100%"
            height="315"
            src={autoplayUrl}
            title={`${title} trailer`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default SeriesCard;