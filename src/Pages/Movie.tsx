import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { getMovieData } from '../actions/movie';
import {ExpState} from "../reducers/index"
import Row from '../Components/Row';
import Details from '../Components/Details';
import Footer from '../Components/Footer';
import { HeartIcon, EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
// import { addToWatchlist, isInWatchlist, removeFromWatchlist } from '../localStorage/wishList';
import useDb from '../hooks/useDb';

const Movie = () => {
  const {innerWidth:width} = window
  const {id} = useParams();
  const details = useSelector((state: ExpState) => state.movieReducer.details);
  const loading = useSelector((state: ExpState) => state.movieReducer.loading);
  const loadingRec = useSelector((state: ExpState) => state.movieReducer.loadingRec);
  const dispatch = useDispatch();
  const [seen, setSeen] = useState(false);
    const {addToHistory} = useDb()
    const image500 = "https://image.tmdb.org/t/p/original"
    // const [isFav, setIsFav] = useState(isInWatchlist(id as number | undefined))
    // console.log(isFav);
    
    const iconClasses = "h-9 w-9 absolute md:bottom-0 md:right-[50%] cursor-pointer transition-all duration-200 "
    useEffect(() => {
      window.scrollTo(0, 0)
      dispatch(getMovieData(id));
    },[id])
    useEffect(() =>{
      if (details){
        addToHistory(details)
      }
    }, [details])
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
    
    }
    return (
    <>
      <div className="relative">
        <section className="relative z-50 ">
          <div className="relative w-full">
            <img className="object-contain " src={`${image500}${width>600 ? details.backdrop_path : details.poster_path}`} alt=""/>
          </div>
          <div className="absolute inset-y-28 md:inset-y-auto md:top-10 inset-x-4 md:inset-x-12 space-y-6 z-50">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {details.title || details.original_name}
            </h1>
            <p className="text-xs md:text-sm">
              {details.release_date || details.first_air_date} •{" "}
              {Math.floor(details.runtime / 60)}h {details.runtime % 60}m •{" "}
            </p>
            <h4 className="text-sm md:text-lg max-w-4xl">{details.overview}</h4>
            <div className="  py-5">
              {details?.genres && details.genres.map((genre:any, index:number) => {
                return (
                  <span key = {index} className=" bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                  #{genre.name}
                </span>
              )},)}
            </div>
            <span className={iconClasses + "flex-col"}>
              {seen ? <EyeIcon  /> : <EyeOffIcon />}
              <HeartIcon onClick={handleHeart} />
            </span>
            <Details movie={details}/>
          </div>
        </section>
        {!loadingRec && (<section className="md:space-y-24">
          <Row />
        </section>)}
        <Footer />
      </div>
    </>
  )
}

export default Movie
