import axios from 'axios';

const API = axios.create({ baseURL: 'http://127.0.0.1:5000' });

export const fetch_movies = (id:any) => API.get<any>(`/movies/fetch/${id}`);

export const recommend_movies = (id:any) => API.get<any>(`/movies/recommend/${id}`);

