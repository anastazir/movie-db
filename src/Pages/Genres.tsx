import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GENRES, GENRE_IDS } from '../constants/genreIds';
import Footer from '../Components/Footer';
import { genreSearch } from '../actions/movie';
import { ExpState } from '../reducers';
import MovieCard from '../Components/MovieCard';
import Grid from '../Components/Grid';

const Genres = () => {
  const [page, setPage] = useState(1)
  const movieLists = useSelector((state: ExpState) => state.genreReducer.movieLists);
  const loading = useSelector((state: ExpState) => state.genreReducer.loading);
  const [genres, setGenres] = useState([""])
  const [genresIds, setGenresIds] = useState<number[]>([])
  const dispatch = useDispatch();
  document.title = "Genres"
  let l: number[] =[]
  useEffect(() =>{
    Object.entries(GENRE_IDS).forEach(([key, value]) => {
      if (genres.includes(key)){
        l.push(value)
      }
    })
    setGenresIds(l)
  }, [genres])

  const handleClick = () => {
    dispatch({type: "CLEAR_LIST"})
    dispatch(genreSearch(genresIds.join(), page))
  }

  const handleSearch = () => {
    dispatch(genreSearch(genresIds.join(), page+1))
    setPage(page+1)
  }

  return (
    <>
    <div className="h-full">
      <div className="flex flex-wrap px-5 ">
        {GENRES.map((genre:string, index:number) => {
          return (
            <ChipButton key = {index} genre = {genre} setGenres = {setGenres} genres = {genres}/>
            )},)}
      </div>
      <div className="py-5 text-center ">
        <button onClick ={handleClick}className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Search
        </button>
      </div>
      <Grid>
        {loading && <div>Loading...</div>}
        {movieLists && movieLists.map((movie:any, index:number) => {
          return (
            <MovieCard key={index} movie={movie}/>
          )},
        )}
      </Grid>
      {movieLists && !loading && (
        <div className="flex mt-5 py-5">
        <button onClick ={handleSearch} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-auto">
          Load More
        </button>
      </div>
      )}
    <Footer />
    </div>
    </>
  )
}

export default Genres

interface Porps{
  genre:string
  setGenres: Dispatch<SetStateAction<string[]>>
  genres: string[]
}

const ChipButton = ({genre, setGenres, genres}:Porps) => {
  const [isSelected, setIsSelected] = useState(false)
  let newArr = []

  const handleClick = () => {
    if (isSelected) {

      newArr = genres.filter(function(item){
        if(item !== genre){
          return item
        }
      });
    setGenres([ ...newArr])
    }else{
      setGenres([...genres, genre])
    }
    setIsSelected(!isSelected)
  }
  return (
    <>
    <div className="flex flex-wrap justify-center space-x-2 py-2 px-2 text-xs">
      {!isSelected && 
        <span onClick={handleClick} className=" cursor-pointer px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold  flex align-center w-maxactive:bg-gray-300 transition duration-300 ease">
          {genre}
        </span>}
      {isSelected && 
      <span className=" cursor-pointer px-4 py-2 rounded-full text-gray-500 bg-green-300 font-semibold flex align-center w-max active:bg-gray-300 transition duration-300 ease">
        {genre}
        <button className="bg-transparent hover focus:outline-none">
          <svg onClick={handleClick} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times"
            className="w-3 ml-3 text-red-400 hover:text-black" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512">
            <path fill="currentColor"
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
            </path>
          </svg>
        </button>
      </span>}
    </div>
    </>
  )
}