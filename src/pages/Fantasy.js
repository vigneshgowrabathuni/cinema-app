import React, { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList/MoviesList";
import Pagination from "../components/Pagination/Pagination";
import { fetchMovies } from "../services";

export default function Fantasy() {
  const [showList, setShowList] = useState(false);
  const [movies, setMovies] = useState([]);
  const getMovies = async (pageNumber) => {
    const { results } = await fetchMovies(14, pageNumber);
    setMovies(results);
  };

  useEffect(() => {
    getMovies(1);
  }, []);

  return (
    <>
      <div className="hero-text">
        <h1 className="main-title">Fantasy</h1>
        <button className="btn" onClick={() => setShowList(true)}>
          View List
        </button>
      </div>
      {showList && (
        <>
          <MoviesList movies={movies} genereName={"Fantasy"} />
          <Pagination getMovies={getMovies} />
        </>
      )}
    </>
  );
}
