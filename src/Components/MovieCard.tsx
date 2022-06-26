// import { InformationCircleIcon } from "@heroicons/react/solid";
import { XCircleIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { RootObject, RootObject2 } from "../interface/movieInterfaces";
import { removeFromWatchlist } from "../localStorage/wishList";

type IFooBar = RootObject & RootObject2;
interface Props{
    movie: IFooBar
    key: number
    type: string
}
const MovieCard = ({movie, key, type}: Props) => {

    const image500 = "https://image.tmdb.org/t/p/w500"
    return (
        <div key={key} className="relative group cursor-pointer transition duration-200 ease-out md:hover:scale-105">
            <Link to={`/movie/details/${movie.id}`}>
                <img className="rounded-lg m-auto hover:opacity-80 transition-all duration-200" src={ `${image500}${movie.poster_path}`} alt="" />
            </Link>
            {type === "favorites" && (<button onClick={()=>removeFromWatchlist(movie.id)} className="z-5 opacity-0 transition hover:scale-125 group-hover:opacity-100 h-5 w-5 md:h-8 md:w-8 absolute bottom-0 left-0 cursor-pointer">
               <XCircleIcon / >
            </button>)}
        </div>
    )
}

export  default MovieCard