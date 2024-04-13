import { Suspense, lazy } from "react";
import { Routes, Route, } from "react-router-dom";
import MovieCast from "../MovieCast/MovieCast";
import MovieReviews from "../MovieReviews/MovieReviews";
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));
import Navigation from "../Navigation/Navigation";
import  './App.css';

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage/MovieDetailsPage"));

export default function App()  {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading.......</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movie_id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}





