import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import MyLoader from "../../components/MyLoader/MyLoader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { getMovies } from "../../movies-api";
import css from "./HomePage.module.css";


export default function HomePage() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getData () {
            try {
                setLoading(true)
                setError(false)
                const data = await getMovies();
                setMovies(data.results);
            } catch (error) {
                setError(true);
            }
            finally{
                setLoading(false);
              }
        }
        getData();
    }, []);

    return (
    <div className={css.container}>
        <h1 className={css.title}>Trending today</h1>
        {loading && <MyLoader/>}
        {error && <ErrorMessage/>}
        <MovieList movies={movies}/>
        
    </div>
    );
}

