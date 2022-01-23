import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../App";
import Card from "../components/Card";
import { BASE_URL } from "../settings";
import "../styles/Search.css";

export default function Search() {
  const [query, setQuery] = useState("");
  const [searchForm, setSearchForm] = useState("");
  const { movies, setMovies } = useContext(GlobalContext);

  const SEARCH_URL = `${BASE_URL}/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

  const handleQueryChange = (e) => {
    setSearchForm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(searchForm);
    setSearchForm("");
  };

  useEffect(() => {
    fetch(SEARCH_URL)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, [query, setMovies, SEARCH_URL]);

  return (
    <div className="search-main-container">
      <form onSubmit={handleSearch} className="movie-search-form" action="">
        <div className="form-group">
          <label htmlFor="query"></label>
          <input
            id="query"
            type="text"
            className="form-text text-muted form-control"
            placeholder="Search movie.."
            onChange={handleQueryChange}
            value={searchForm}
          />
        </div>
      </form>
      <div className="main-container">
        <div className="card-container">
          {movies?.map((movie) => (
            <Card
              key={movie.id}
              url={movie.poster_path}
              title={movie.original_title}
              overview={movie.overview}
              release={movie.release_date}
              id={movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
