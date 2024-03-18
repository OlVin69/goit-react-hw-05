 import { Link } from "react-router-dom";

 export default function MovieItem ({movie}) {
return(
    <div>
        <Link to="/movies/:movieId" >{movie.title}</Link>
    </div>
)
 }