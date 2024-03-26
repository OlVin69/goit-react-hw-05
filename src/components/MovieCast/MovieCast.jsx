import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCreditsById } from "../../movies-api";

import css from "./MovieCast.module.css";

export default function MovieCast () {
    const { movie_id } = useParams();
   console.log(movie_id);

  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchMovieCastById() {
      try {
       
        const data = await getMovieCreditsById(movie_id);
        setCast(data);
                
      } 
      catch (error) {
        console.log(error);
    }
   }
    fetchMovieCastById()},
   [movie_id]);
   console.log(movie_id);

   return (
    <ul className={css.list}>
      {cast.length > 0 &&
        cast.map(({ id, name, profile_path, character }) => (
          <li key={id} className={css.listItem}>
            <div>
              <img
                className={css.castImage}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg"
                }
                width={180}
                alt={name}
              />
              <p>{name}</p>
              <p>{character}</p>
            </div>
          </li>
        ))}
    </ul>
  );
}