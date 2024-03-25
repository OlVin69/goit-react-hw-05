import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import MyLoader from "../../components/MyLoader/MyLoader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { getMovies } from "../../movies-api";


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
    <div>
        <h1>Trending today</h1>
        {error && <ErrorMessage/>}
        <MovieList movies={movies}/>
        {loading && <MyLoader/>}
    </div>
    );
}

