import { useNavigate } from "react-router-dom";

const Thumbnail = ({key, movie}: any) => {
  const navigate = useNavigate()

  const handleClick = (e: any) => {
    e.preventDefault();

    navigate(`/movie/details/${movie.tmdb_id}`);
  }
  return (
    <img key ={key} src={ movie.poster.replace("original", "w300")} alt="" className=" md:rounded cursor-pointer h-[100px]" onClick={handleClick}/>
  )
}

export default Thumbnail