import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { getMovieData } from '../actions/movie';
import {ExpState} from "../reducers/index"
import Row from '../Components/Row';
const Movie = () => {
    const details = useSelector((state: ExpState) => state.movieReducer.details);
    const loading = useSelector((state: ExpState) => state.movieReducer.loading);
    const dispatch = useDispatch();
    const {id} = useParams();
    const image500 = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
      console.log("new id is ", id);
      dispatch(getMovieData(id));
      // dispatch(getMovieRecommendation(id))
        // console.log('useEffect', details);
    },[id])
    
    if(loading){
      return(
        <div className="flex justify-center items-center">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )
    }

    return (
    <>
      <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:pb-12">
        <div className=" top-0 left-0 h-[95vh] relative -z-10">
          <img src={`${image500}${details.backdrop_path}`} alt=""  className="object-fit "/>
        </div>
        <div className = " lg:ml-10">
          <h1 className="text-2xl  lg:text-7xl md:text-4xl pb-12 ">{details?.title || details?.name || details?.original_name}</h1>
          <p className=" max-w-xs md:max-w-lg md:text-lg">{details.overview}</p>
        </div>
      </div>
      {/* <Recommender /> */}
      <Row />
    </>
  )
}

export default Movie