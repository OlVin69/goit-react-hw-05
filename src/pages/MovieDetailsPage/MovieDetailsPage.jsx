import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyLoader from "../../components/MyLoader/MyLoader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { getMoviesById } from "../../movies-api";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";


export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const {movie_id}=useParams();

    useEffect(() => {
        if(!movie_id) return;
        async function getData () {
            try {
                setLoading(true)
                setError(false)
                const data = await getMoviesById();
                 setMovie(data);
            } catch (error) {
                setError(true);
            }
            finally{
                setLoading(false);
              }
        }
        getData();
    }, [movie_id]);

    return (
    <div> 
        <h1>MovieDetailsPage</h1>
        {error && <ErrorMessage/>}
        {movie && <MovieCast movie={movie}/> }
        {movie && <MovieReviews movie={movie}/> }
        {loading && <MyLoader/>}
    </div>
    )
    
}