import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { getMovieData } from '../actions/movie';
import {ExpState} from "../reducers/index"

const Movie = () => {
    const details = useSelector((state: ExpState) => state.movieReducer.details);
    const loading = useSelector((state: ExpState) => state.movieReducer.loading);
    const dispatch = useDispatch();
    const genreList = details?.genres.map((genres:any) =>genres.name).join()
    const {id} = useParams();
    const image500 = "https://image.tmdb.org/t/p/original"
    useEffect(() => {
      dispatch(getMovieData(id));
      // dispatch(getMovieRecommendation(id))
        // console.log('useEffect', details);
    },[])
    console.log("genreList", genreList);
    
    if(loading){
      return(
        <h1>Loading</h1>
      )
    }

    return (
    <div className="bg-black text-white">
      <img className="rounded-t-lg m-auto object-contain h-4/5 w-4/5 hidden sm:block" src={ `${image500}${details.backdrop_path}`} alt="" />
        <div className="flex flex-col md:flex-row  w-full mt-8  top-0 left-0  rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg h-96" src={ `${image500}${details.poster_path}`} alt="" />
          <div className="p-5">
            <h2 className="text-4xl mt-4 md:mt-0 font-semibold">{details.title}</h2>
            <div className="flex flex-wrap items-center text-gray-400 text-sm">
              <svg className="fill-current text-orange-500 w-4" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z" data-name="star"/></g></svg>
              <span className="ml-1">{details.vote_average}</span>
              <span className="mx-2">|</span>
              <span>{details.release_date}</span>
              <span className="mx-2">|</span>
              <span>{genreList}</span>
            </div>
            <p className="text-gray-300 mt-8">{details.overview}</p>
          </div>
        </div>
      </div>
  )
}

export default Movie