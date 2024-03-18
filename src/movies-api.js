import axios from "axios";

// axios.defaults.baseURL = "https://api.themoviedb.org/3";

// export const getMovies = async ()=>{
//     const response = await axios.get("/movie/day");
//     return response.data;
// };

// const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
// 'https://api.themoviedb.org/3/trending/movie/day?language=en-US' 

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjU4NTE2ZTg0NTliYWFmYzMwMWQ4YWNhZTBjMzRiMyIsInN1YiI6IjY1ZWViYjFmMDAxYmJkMDE4NjdmODA4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9BOtt3VC3rtxjC0uDrQ7kfwBB2S0MMSTwNR4KRpoHEk'
  }
};

export const getMovies = async ()=>{
    const response = await axios.get("/trending/movie/day?language=en-US", options);
    return response.data;
};

// axios.get(url, options)
//   .then(response => console.log(response))
//   .catch(err => console.error(err));