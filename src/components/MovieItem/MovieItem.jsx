 import { Link } from "react-router-dom";

 export default function MovieItem ({movie}) {
return(
    <div>
        <Link to={`/movies/${movie.id}`} >{movie.title}</Link>
    </div>
)
 }