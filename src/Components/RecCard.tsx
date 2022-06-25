import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const RecCard = (props:any) => {
    const navigate = useNavigate()
    const {movie, key} = props;
    
    const handleClick = (e: any) => {
        e.preventDefault();
        navigate(`/movie/details/${movie.tmdb_id}`);
    }

    return (
        <div key={key} className="relative  md:min-w-[180px] cursor-pointer transition duration-200 ease-out md:hover:scale-105">
            <Link to={`/movie/details/${movie.tmdb_id}`}>
                <img onClick={handleClick} className="cursor-pointer transition duration-200 ease-out rounded-t-lg m-auto md:hover:scale-105" src={ movie.poster.replace("original", "w300")} alt="" />
            </Link>
        </div>
    )
}

export default RecCard