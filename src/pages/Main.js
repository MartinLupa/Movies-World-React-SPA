import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../App";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { BASE_URL } from "../settings";
import "../styles/Main.css";

export default function Main() {
  const [pages, setPages] = useState({ current: 1, total: undefined });
  const { movies, setMovies } = useContext(GlobalContext);

  const URL = `${BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US&page=1`;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setPages(data.page);
      })
      .catch((err) => err);
  });

  return (
    <div className="main-container">
      <Pagination pages={pages} setPages={setPages} />
      <h2>Popular movies</h2>
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
  );
}
