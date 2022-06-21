import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { trendingMovies} from '../actions/movie';
import {ExpState} from "../reducers/index"
import MovieCard from '../Components/MovieCard';

export const Home = () => {
  const dispatch = useDispatch();
  const movieLists = useSelector((state: ExpState) => state.trendingReducer.movieLists);
  const loading = useSelector((state: ExpState) => state.trendingReducer.loading);

  useEffect(() => {
    dispatch(trendingMovies());
  },[])
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 sm:gird-cols-1 gap-0">
    {loading && <div>Loading...</div>}
    {movieLists && movieLists.map((movie:any, index:number) => {
            return (
              <MovieCard key={index} movie={movie} />
            )
          },)}
    </div>
  )
}
