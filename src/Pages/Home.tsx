import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incrementPage, trendingMovies} from '../actions/movie';
import {ExpState} from "../reducers/index"
import MovieCard from '../Components/MovieCard';
import Footer from '../Components/Footer';
import Grid from '../Components/Grid';

export const Home = () => {
  const [page, setPage] = useState<number>(useSelector((state: ExpState) => state.trendingReducer.page))
  const dispatch = useDispatch();
  const movieLists = useSelector((state: ExpState) => state.trendingReducer.movieLists);
  const loading = useSelector((state: ExpState) => state.trendingReducer.loading);
  document.title = "Home"

  useEffect(() => {
    dispatch(trendingMovies(page));
    console.log(page);
    
  },[page])

  const handleClick = () => {
    setPage(page+1);
    dispatch(incrementPage(page))
  }

  return (
    <>
      <Grid>
        {loading && <div>Loading...</div>}
        {movieLists && movieLists.map((movie:any, index:number) => {
          return (
            <MovieCard key={index} movie={movie}/>
          )},
        )}
      </Grid>
      <div className="flex mt-5 py-5">
        <button onClick ={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-auto">
          Load More
        </button>
      </div>
      <Footer />
    </>
  )
}
