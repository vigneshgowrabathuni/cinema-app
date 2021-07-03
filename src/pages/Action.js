import React, { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList/MoviesList";
import Pagination from "../components/Pagination/Pagination";
import { fetchMovies } from "../services";

export default function Action() {
  const [showList, setShowList] = useState(false);
  const [movies, setMovies] = useState([]);
  const getMovies = async (pageNumber) => {
    const { results } = await fetchMovies(28, pageNumber);
    setMovies(results);
  };

  useEffect(() => {
    getMovies(1);
  }, []);

  return (
    <>
      <div className="hero-text">
        <h1 className="main-title">Action</h1>
        <button className="btn" onClick={() => setShowList(true)}>
          View List
        </button>
      </div>
      {showList && (
        <>
          <MoviesList movies={movies} genereName={"Action"} />
          <Pagination getMovies={getMovies} />
        </>
      )}
    </>
  );
}
