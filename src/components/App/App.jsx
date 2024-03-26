import { Suspense, lazy } from "react";
import { Routes, Route, } from "react-router-dom";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage/MovieDetailsPage"));
import MovieCast from "../MovieCast/MovieCast";
import MovieReviews from "../MovieReviews/MovieReviews";
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));
import Navigation from "../Navigation/Navigation";
import  './App.css';


export default function App()  {
  return (
    <div>
      <Navigation />
      <h1></h1>
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



// export default function App() {

//   return (
//   <div>
//     <Navigation/>
//     <Routes>
//       <Route path="/" element={<HomePage/>} />
//       <Route path="/movies" element={<MoviesPage/>} />
//       <Route path="/movies/:movieId" element={<MovieDetailsPage/>}>
//         <Route path="cast" element={<MovieCast/>}/>
//         <Route path="reviews" element={<MovieReviews/>}/>  
//       </Route>
//       <Route path="*" element={<NotFoundPage/>} />
//     </Routes>
//   </div>)
  
// }
