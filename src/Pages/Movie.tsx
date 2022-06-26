import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { getMovieData } from '../actions/movie';
import {ExpState} from "../reducers/index"
import Row from '../Components/Row';
import Details from '../Components/Details';
import Footer from '../Components/Footer';
import { HeartIcon, EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { addToWatchlist, isInWatchlist, removeFromWatchlist } from '../localStorage/wishList';

const Movie = () => {
  const {id} = useParams();
  const details = useSelector((state: ExpState) => state.movieReducer.details);
  const loading = useSelector((state: ExpState) => state.movieReducer.loading);
  const loadingRec = useSelector((state: ExpState) => state.movieReducer.loadingRec);
  const dispatch = useDispatch();
  const [seen, setSeen] = useState(false);
    const image500 = "https://image.tmdb.org/t/p/original"
    const [isFav, setIsFav] = useState(isInWatchlist(id as number | undefined))
    console.log(isFav);
    
    const iconClasses = "h-9 w-9 absolute md:bottom-0 md:right-[50%] cursor-pointer transition-all duration-200 "
    useEffect(() => {
      window.scrollTo(0, 0)
      dispatch(getMovieData(id));
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
    const handleHeart = () => {
      if (!isFav) {
        addToWatchlist(details)
      }else{
        removeFromWatchlist(details)
      }
      setIsFav(!isFav)
    }
    return (
    <>
      <div className="flex flex-col space-y-2  md:space-y-4 lg:h-[65vh] lg:pb-12 ">
        <div className=" top-0 left-0 -z-10 w-screen ">
          <img src={`${image500}${details.backdrop_path}`} alt=""  className="object-cover "/>
        </div>
        <div className=" md:absolute top-50 left-0">
          <h1 className="px-6 mt-7 text-2xl font-bold md:text-4xl lg:text-7xl pb-4 ">{details?.title || details?.name || details?.original_name}</h1>
          <p className="hidden md:block  px-6 max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{details.overview}</p>
          <div className=" px-6 py-5">
            {details?.genres && details.genres.map((genre:any, index:number) => {
              return (
                <span key = {index} className=" bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                #{genre.name}
              </span>
            )},)}
          </div>
          <div className="px-6 ">
            <Details movie={details} />
          </div>
          <div className={iconClasses}>
            {seen ? <EyeIcon  /> : <EyeOffIcon />}
            <HeartIcon onClick = {handleHeart}  className={(isFav ? " fill-red-500" : "")} />
          </div>
        </div>
        {!loadingRec && (<section className="md:space-y-24">
          <Row />
        </section>)}
        <Footer />
      </div>
    </>
  )
}

export default Movie