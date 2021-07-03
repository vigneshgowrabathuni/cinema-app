import "./MoviesList.css";

function MoviesList({ movies, genereName }) {
  return (
    <div>
      <div className="content-wrapper">
        <h2>{genereName} Movies</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div>
        <ul className="cards">
          {movies.map((movie) => {
            return (
              <li className="cards-item" key={movie.id}>
                <div className="card">
                  <div className="card-image">
                    <img
                      src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </div>
                </div>
                <div className="movie-content">
                  <p className="movie-title">{movie.title}</p>
                  <p className="movie-rating">
                    Average Rating: {movie.vote_average}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default MoviesList;
