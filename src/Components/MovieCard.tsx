// import { InformationCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({movie, key}: any) => {
    const navigate = useNavigate();
    const [showDiv, setShowDiv] = useState(false)
    const handleClick = () => {
        navigate(`/movie/details/${movie.id}`);
    }

    const image500 = "https://image.tmdb.org/t/p/w500"

    return (
        <div key={key} onClick={handleClick} className="relative group cursor-pointer transition duration-200 ease-out md:hover:scale-105">
            <img className="rounded-lg m-auto" src={ `${image500}${movie.poster_path}`} alt="" />
            {/* <button className="opacity-0 transition hover:scale-125 group-hover:opacity-100 h-5 w-5 md:h-8 md:w-8 absolute bottom-0 left-0 cursor-pointer">
               <InformationCircleIcon / >
            </button> */}
        </div>
    )
}

export  default MovieCard