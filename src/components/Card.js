import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../App";
import { DUMMY_IMAGE_URL, IMG_PATH } from "../settings";
import "../styles/Card.css";
import AddBtn from "./AddBtn";
import DeleteBtn from "./DeleteBtn";
import DetailsBtn from "./DetailsBtn";

export default function Card({ url, title, overview, release, id }) {
  const { movieID, setMovieID, movies, setWatchList, watchList } =
    useContext(GlobalContext);
  const location = useLocation();
  const src = url ? `${IMG_PATH}${url}` : DUMMY_IMAGE_URL;

  return (
    <div className="card">
      <img src={src} className="card-img-top" alt={title}></img>
      <div className="card-body">
        <h4 className="card-text">{title}</h4>
        <p className="card-text">{overview.slice(0, 220) + "..."}</p>
        <p>Released {release}</p>
      </div>
      <div className="card-btn-container">
        <DetailsBtn movieID={movieID} setMovieID={setMovieID} id={id} />
        {location.pathname === "/" || location.pathname === "/search" ? (
          <AddBtn movies={movies} setWatchList={setWatchList} id={id} />
        ) : null}
        {location.pathname === "/watchlist" ? (
          <DeleteBtn
            setWatchList={setWatchList}
            watchList={watchList}
            id={id}
          />
        ) : null}
      </div>
    </div>
  );
}
