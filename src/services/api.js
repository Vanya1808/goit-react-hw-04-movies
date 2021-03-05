import axios from "axios";

const baseURL = `https://api.themoviedb.org`;
const key = `c066fa10c48b6ac99e7bc3c956814e9f`;

const fetchFilmesOfHomePage = () => {
  let url = `${baseURL}/3/trending/movie/day?api_key=${key}`;
  return axios.get(url);
};

const fetchFilmesWithQuery = (query) => {
  let url = `${baseURL}/3/search/movie?api_key=${key}&query=${query}`;
  return axios.get(url);
};

const fetchGetInfoAboutFilm = (movieId) => {
  let url = `${baseURL}/3/movie/${movieId}?api_key=${key}`;
  return axios.get(url);
};

const fetchCastInfo = (movieId) => {
  let url = `${baseURL}/3/movie/${movieId}/credits?api_key=${key}`;
  return axios.get(url);
};

const fetchReviewsInfo = (movieId) => {
  let url = `${baseURL}/3/movie/${movieId}/reviews?api_key=${key}`;
  return axios.get(url);
};


export default { fetchFilmesOfHomePage, fetchFilmesWithQuery, fetchGetInfoAboutFilm, fetchCastInfo, fetchReviewsInfo };
