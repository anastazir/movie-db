import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { getMovieAndRecommendations } from '../actions/movie';
import {ExpState} from "../reducers/index"
import Row from '../Components/Row';
import Details from '../Components/Details';
import Footer from '../Components/Footer';
import useDb from '../hooks/useDb';

const Movie = () => {
    const {innerWidth:width} = window
    const {id} = useParams();
    const dispatch = useDispatch();
    const details = useSelector((state: ExpState) => state.movieReducer.details)
    const loading = useSelector((state: ExpState) => state.movieReducer.loading);
    const loadingRec = useSelector((state: ExpState) => state.movieReducer.loadingRec);
    const recLists = useSelector((state: ExpState) => state.movieReducer.movieLists) as Array<any>
    const {addToHistory} = useDb()
    const image500 = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
      dispatch(getMovieAndRecommendations(id))
      window.scrollTo(0, 0)
    },[id])
    useEffect(() =>{
      if (details){
        document.title = details.title || details.original_name;
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
    return (
    <>
        <section className="relative z-50 ">
          <div className="relative w-full">
            <img className="object-contain brightness-95" src={`${image500}${width>600 ? details.backdrop_path : details.poster_path}`} alt=""/>
          </div>
          <div className="hidden md:inline lg:inline absolute inset-y-28 md:inset-y-auto md:top-10 inset-x-4 md:inset-x-12 space-y-6 z-50">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {details.title || details.original_name}
            </h1>
            <p className="text-xs md:text-sm">
              {details.release_date || details.first_air_date} •{" "}
              {Math.floor(details.runtime / 60)}h {details.runtime % 60}m •{" "}
            </p>
            <h4 className=" text-sm md:text-lg max-w-4xl">{details.overview}</h4>
            <div className="py-5">
              {details?.genres && details.genres.map((genre:any, index:number) => {
                return (
                  <span key = {index} className=" bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                  #{genre.name}
                </span>
              )},)}
            </div>
            <Details/>
          </div>
        </section>

        <details className="absolute top-10 md:hidden lg:hidden  pb-9 px-10 py-10 shadow rounded group mb-4 z-50 " open>
          <summary className="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus-visible:ring 
            rounded group-open:rounded-b-none group-open:z-[1] relative">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Details
            </h1>
            <div className="flex w-10 items-center justify-center">
              <div className="border-8 border-transparent border-l-gray-600 ml-2
              group-open:rotate-90 transition-transform origin-left"></div>
            </div>
          </summary>
          <div className=" ">
            <h4 className=" text-sm md:text-lg max-w-4xl">{details.overview}</h4>
            <div className="py-5">
              {details?.genres && details.genres.map((genre:any, index:number) => {
                return (
                  <span key = {index} className=" bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                  #{genre.name}
                </span>
              )},)}
            </div>
            <Details/>
          </div>
        </details>

        {!loadingRec && recLists && 
        (
          <>
            <Row title="Recommendations" recLists = {recLists[2]} loading = {loadingRec}/>
            <Row title="Similar" recLists = {recLists[0]} loading = {loadingRec}/>
            <Row title="Similar Genres" recLists = {recLists[1]} loading = {loadingRec}/>
          </>
        )}
        <Footer />
    </>
  )
}

export default Movie
