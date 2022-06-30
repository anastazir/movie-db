import axios from 'axios';

const API = axios.create({ baseURL: 'http://127.0.0.1:5000' });
const API2 = axios.create({ baseURL: 'https://api.themoviedb.org/3/'})
const API3 = axios.create({ baseURL: 'http://www.omdbapi.com/'})
// export const fetch_movies = (id:any) => API.get<any>(`/movies/fetch/${id}`);

export const search_movies = (search:any, page:number = 1) => API2.get<any>(`search/movie?api_key=26ba5e77849587dbd7df199727859189&query=${search}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);

export const trending_movies = (page:number) => API2.get<any>(`trending/movie/day?api_key=26ba5e77849587dbd7df199727859189&language&page=${page}`)

export const movie_details = (id:any) => API2.get<any>(`movie/${id}?api_key=26ba5e77849587dbd7df199727859189`)

export const get_crew = (imdb_id:any) => API3.get<any>(`?i=${imdb_id}&apikey=ac6564b1`)

export const genre_search = (genres:string, page:number = 1) => API2.get<any>(`discover/movie?api_key=26ba5e77849587dbd7df199727859189&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genres}`)

export const get_similar_movies = (id:string) => API2.get<any>(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=26ba5e77849587dbd7df199727859189&language=en-US&page=1`)

export const recommend_movies_custom = (id:any) => API.get<any>(`/movies/recommend/${id}`);

export const recommend_movies_web = (id:string) => API.get<any>(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=26ba5e77849587dbd7df199727859189&language=en-US&page=1`)