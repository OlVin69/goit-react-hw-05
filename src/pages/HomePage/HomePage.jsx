import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList"
import { getMovies } from "../../movies-api";


export default function HomePage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getData () {
            try {
                const data = await getMovies();
                setMovies(data.results);
            } catch (error) {}
        }
        getData();
    }, []);

    return (
    <div>
        <h1>Trending today</h1>
        <MovieList movies={movies}/>
    </div>
    );
}

