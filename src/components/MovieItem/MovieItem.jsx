 import { Link } from "react-router-dom";

 export default function MovieItem ({movie, location}) {
return(
    <div>
        <Link to={`/movies/${movie.id}`} state={location} >{movie.title}</Link>{" "}
    </div>
)
 }

 