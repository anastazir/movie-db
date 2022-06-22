import React from 'react'
import { useNavigate } from "react-router-dom";

const RecCard = (props:any) => {
    const navigate = useNavigate()
    const {movie, key} = props;
    console.log("movie", movie);
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate(`/movie/details/${movie.tmdb_id}`);
    }

    return (
        <div key={key} className="relative bg-black rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg m-auto" src={ movie.poster.replace("original", "w300")} alt="" />
              <h5 className="py-4 text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.name}</h5>
              <p> {movie.year}</p>
              <button onClick={handleClick} className="text-center absolute  text-indigo-400 font-bold rounded bottom-0 left-0 focus:outline-none bg-gray-900 border-2 border-indigo-400">Details</button>
        </div>
    )
}

export default RecCard