import { useEffect, useRef, useState } from "react";
import {Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getMoviesById } from "../../movies-api";
import css from "./MovieDetailsPage.module.css";

const makeActiveClass = ({ isActive }) => {
  return `css.link ${isActive && css.isActive}`;
};


export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(false);

    const {movie_id}=useParams();
    console.log(movie_id);
    const location = useLocation();
    const backLinkRef = useRef(location.state ?? "/movies");

    useEffect(() => {
        if(!movie_id) return;
        async function getData () {
            try {
                const data = await getMoviesById(movie_id);
                 setMovie(data);
            } catch (error) {
                console.log(error);
            }
            
        }
        getData();
    }, [movie_id]);

    return (
    <div className={css.container}> 
    <div>
        <h2 className={css.header}>Details about Movie: {movie.title}</h2>
        <Link className={css.goBack} to={backLinkRef.current}>
          Go back
        </Link>
        <div className={css.baseContainer}>
          <img
            className={css.imgMovie}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
          <div>
            <b>Overview:</b>
            <p>{movie.overview}</p>
            <b className={css.genres}>Genres:</b>
            <p>
              {movie.genres &&
                movie.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>
        </div>
        <h3>Details</h3>
        <ul className={css.listLinks}>
          <li>
            <NavLink to="cast" state={location} className={makeActiveClass}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={location} className={makeActiveClass}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
        
    </div>
    )
}