import { InformationCircleIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const MovieCard = (props: any) => {
    const navigate = useNavigate();
    const {movie, key} = props;
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate(`/movie/details/${movie.id}`);
    }

    const image500 = "https://image.tmdb.org/t/p/w500"

    return (
        <div key={key} className="relative bg-black rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-lg m-auto" src={ `${image500}${movie.poster_path}`} alt="" />
            <div className="p-5  ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{movie.original_title} {movie.release_date}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.overview}</p>
            </div>
            <button onClick={handleClick} className="h-5 w-5 md:h-8 md:w-8 absolute bottom-0 left-0 cursor-pointer">
               <InformationCircleIcon />
            </button>
        </div>
    )
}

export  default MovieCard