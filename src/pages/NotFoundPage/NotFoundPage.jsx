import{Link} from "react-router-dom";

export default function NotFoundPage () {
    return (
        <div>
          <p>Oops! Anything Is Not Found!</p>
          <Link to="/">Back to Home Page</Link>
        </div>
    
    )
}