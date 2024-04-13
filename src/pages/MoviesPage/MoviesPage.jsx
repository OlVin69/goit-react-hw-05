import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { getMovieByName } from "../../movies-api";

import css from "./MoviesPage.module.css";

export default function MoviesPage() {
      
  const [query, setQuery] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const movieFilter = query.get("query") ?? "";
    
  useEffect(() => {
    if (movieFilter === "") {
      return;
    }
    async function searchMovies() {
      try {
        const data = await getMovieByName(movieFilter);
        setMovies(data.results);
       
      } catch (error) {
        console.error(error);
      } 
    }
    searchMovies();
  }, [movieFilter]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setMovies([]);

    const formData = new FormData(e.target);
    const searchQuery = formData.get("query");
    if (searchQuery === null) {
        alert("Please enter a value in the field");
      } else if(searchQuery.trim() === "")
      {alert("Please enter a value in the field");
    } else
       {
        query.set("query", searchQuery.trim());
        setQuery(query);
      }
    };
 

    return (
        <div className={css.container}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="query"
              defaultValue={movieFilter}
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
            />
            <button type="submit">Search</button>
          </form>
          <div>
            <MovieList movies={movies} />
          </div>
          
        </div>
      );
    }

