// import { InformationCircleIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
import { EyeIcon, XCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation  } from "react-router-dom";
import useDb from "../hooks/useDb";
import { RootObject2 } from "../interface/movieInterfaces";
import { ExpState } from "../reducers";
interface Props{
    movie: RootObject2
    key: number
}

const MovieCard = ({movie, key}: Props) => {
    const location = useLocation();
    const listIds = useSelector((state: ExpState) => state.firebaseReducer.favIds);
    const [fav, setFav] = useState(listIds.includes(movie.id))
    const { innerWidth: width } = window;
    const dispatch = useDispatch();
    
    const {addToList, deleteFavorites, addToSeen} = useDb()
    const handleClick = () => {
        setFav(!fav)
        addToList(movie)
    }
    const seen = () => {
        addToSeen(movie)
    }
    const del = () => {
        dispatch({type: "DELETE_DOC", data: movie.original_title})
        deleteFavorites(movie.original_title)
    }
    const image500 = "https://image.tmdb.org/t/p/w500"
    return (
        <div key={key} className="relative group cursor-pointer transition duration-200 ease-out md:hover:scale-105">
            <Link to={`/movie/details/${movie.id}`}>
                <img className="rounded-lg m-auto hover:opacity-80 transition-all duration-200" src={ `${image500}${width<600 ? movie.backdrop_path : movie.poster_path}`} alt="" />
            </Link>
            {(location.pathname !== "/") && (<button onClick={del} 
            className="z-5 opacity-0 transition hover:scale-125 group-hover:opacity-100 h-5 w-5 md:h-8 md:w-8 absolute top-0 left-0 cursor-pointer">
               <XCircleIcon / >
            </button>)}
            {(location.pathname === "/") && <button onClick={seen} className="z-5  lg:opacity-0 transition hover:scale-125 group-hover:opacity-100 h-5 w-5 md:h-8 md:w-8 absolute bottom-0 right-0 cursor-pointer">
                <EyeIcon className ={`${fav}`} />
            </button>}
            {(location.pathname === "/") && <button onClick={handleClick} className="z-5  lg:opacity-0 transition hover:scale-125 group-hover:opacity-100 h-5 w-5 md:h-8 md:w-8 absolute bottom-0 left-0 cursor-pointer">
                <HeartIcon className ={`${fav && "fill-red-600"}`} />
            </button>}
        </div>
    )
}

export  default MovieCard