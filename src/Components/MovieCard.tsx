// import { InformationCircleIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";

const MovieCard = ({movie, key}: any) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/movie/details/${movie.id}`);
    }

    const image500 = "https://image.tmdb.org/t/p/w500"

    return (
        <div key={key} onClick={handleClick} className="relative group cursor-pointer transition duration-200 ease-out md:hover:scale-105">
            <Link to={`/movie/details/${movie.id}`}>
                <img className="rounded-lg m-auto hover:opacity-80 transition-all duration-200" src={ `${image500}${movie.poster_path}`} alt="" />
            </Link>
            <h3 className="flex flex-wrap top-0 left-0 opacity-0 transition  group-hover:opacity-100 absolute cursor-pointer">
                {movie.original_title}
            </h3>
            {/* <button className="opacity-0 transition hover:scale-125 group-hover:opacity-100 h-5 w-5 md:h-8 md:w-8 absolute bottom-0 left-0 cursor-pointer">
               <InformationCircleIcon / >
            </button> */}
        </div>
    )
}

export  default MovieCard