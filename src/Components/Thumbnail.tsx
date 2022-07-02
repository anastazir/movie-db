import { useNavigate } from "react-router-dom";

const Thumbnail = ({key, movie}: any) => {
  const navigate = useNavigate()
  const image500 = "https://image.tmdb.org/t/p/w500"

  const handleClick = (e: any) => {
    e.preventDefault();

    navigate(`/movie/details/${movie.id}`);
  }
  return (
    <div className="relative min-w-[180px] cursor-pointer transition duration-200 ease-out  md:min-w-[260px] md:hover:scale-105">
      <img key ={key} src={ `${image500}${movie.poster_path}`}  alt="" className=" md:rounded cursor-pointer" onClick={handleClick}/>
    </div>
  )
}

export default Thumbnail