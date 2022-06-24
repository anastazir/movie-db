const Details = ({movie}: any) => {
  return (
    <div className=" md:max-w-lg md:text-lg lg:max-w-2xl">
      <div>Actors : {movie.Actors}</div>
      <div>Released Date : {movie.Released}</div>
      <div>Director : {movie.Director}</div>
      <div>Rated : {movie.Rated}</div>
      <div>Vote : {movie.vote_average}</div>
      <div>Runtime : {movie.runtime}</div>
      <div>Imdb ID : {movie.imdbID}</div>
      <div>Adult : {movie.adult ? 'true' : 'flase'}</div>
    </div>
  )
}

export default Details