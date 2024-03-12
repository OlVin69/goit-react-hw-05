import { Routes, Route, } from "react-router-dom";
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import MovieDetailPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "../MovieCast/MovieCast";
import MovieReviews from "../MovieReviews/MovieReviews";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Navigation from "../Navigation/Navigation";
import  './App.css';



export default function App() {

  return (
  <div>
    <Navigation/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/movies" element={<MoviesPage/>} />
      <Route path="/movies/:movieId" element={<MovieDetailPage/>}>
        <Route path="cast" element={<MovieCast/>}/>
        <Route path="reviews" element={<MovieReviews/>}/>  
      </Route>
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  </div>)
  
}
