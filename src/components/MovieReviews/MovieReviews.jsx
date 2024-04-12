import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviewsById } from "../../movies-api";

import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movie_id } = useParams();
  const [reviews, setReviews] = useState([]);

  

  useEffect(() => {
    async function fetchMovieReviewsById() {
      try {
        
        const data = await getMovieReviewsById(movie_id);
        setReviews(data);
      } catch (error) {
        
        console.error("Error fetching movie reviews:", error);
      } 
    }
    fetchMovieReviewsById();
  }, [movie_id]);

  return (
    <div>
      <p className={css.error}>
        {reviews &&
          reviews.results &&
          reviews.results.length === 0 &&
          "Sorry we don't have any reviews"}
      </p>
      <ul className={css.list}>
        {reviews &&
          reviews.results &&
          reviews.results.length > 0 &&
          reviews.results.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p dangerouslySetInnerHTML={{ __html: review.content }} />
            </li>
          ))}
      </ul>
    </div>
  );
}