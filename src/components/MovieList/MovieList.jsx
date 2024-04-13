import {useLocation} from 'react-router-dom'
import MovieItem from '../MovieItem/MovieItem';
import css from './MovieList.module.css';

export default function MovieList ({ movies }) {
  const location = useLocation();


  return (
    <ul className={css.list}>
      {movies.length > 0 &&
       movies.map(movie=> (
        <li key={movie.id}>
          <MovieItem movie={movie} location = {location} />
        </li>
      ))}
    </ul>
  );
}
