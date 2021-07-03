import axios from "axios";

export const fetchMovies = async (id, pageNumber) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=1915057a09c0d4c4d69f175c22d47d13&with_genres=${id}&page=${pageNumber}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
