
import axios from "axios";
import { API_KEY, BASE_URL } from "components/servise/servise";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
};

export const fetchTrendingMovies = async () => {
  try {
    const { data } = await axios.get('/trending/movie/day');
    return data.results; 
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export const fetchMovieCredits = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/credits`);
    return data.cast;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/reviews`);
    return data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export const fetchMovieSearch = async query => {
  try {
    const { data } = await axios.get(`/search/movie?query=${query}`);

    return data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};
export const fetchMovieDetails = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}`);
    return data;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
};