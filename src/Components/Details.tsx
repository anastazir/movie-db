const Details = ({movie}: any) => {
  return (
    <div className=" text-sm md:text-lg max-w-4xl">
      <div>Actors : {movie.Actors}</div>
      <div>Director : {movie.Director}</div>
      <div>Rated : {movie.Rated}</div>
      <div>Vote : {movie.vote_average}</div>
      <div>Imdb ID : {movie.imdbID}</div>
    </div>
  )
}

export default Details