import axios from 'axios';

// const API = axios.create({ baseURL: 'http://127.0.0.1:5000' });
const API2 = axios.create({ baseURL: 'https://api.themoviedb.org/3/'})

export const search_movies = (search:any, page:number = 1) => API2.get<any>(`search/movie?api_key=${process.env.REACT_APP_TMDB_API}&query=${search}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&language=en-US`);

export const trending_movies = (page:number) => API2.get<any>(`trending/movie/day?api_key=${process.env.REACT_APP_TMDB_API}&language&page=${page}`)

export const movie_details = (id:any) => API2.get<any>(`movie/${id}?api_key=${process.env.REACT_APP_TMDB_API}`)

export const get_crew = (id:any) => API2.get<any>(`movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API}`)

export const genre_search = (genres:string, page:number = 1) => API2.get<any>(`discover/movie?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genres}`)

export const get_similar_movies = (id:string) => API2.get<any>(`movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=1`)

export const recommend_movies_web = (id:string) => API2.get<any>(`movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=1`)

// export const recommend_movies_custom = (id:any, type:string) => API.post<any>(`/movies/recommend/${id}`,{
//     type:type
// });