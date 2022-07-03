import { useSelector } from 'react-redux';
import { ExpState } from '../reducers';

const Details = () => {
  const director = useSelector((state: ExpState) => state.movieReducer.director)
  const cast_obj = useSelector((state: ExpState) => state.movieReducer.cast)
  const cast = cast_obj?.map((c:any)=>{
    return c.name
  }).join(", ")
  console.log(director);

  return (
    <div className=" text-sm md:text-lg max-w-4xl">
        <div>
          <span className="font-semibold">
            Actors : 
          </span>
         {cast}
        </div>
        <div>
          <span className="font-semibold">
            Director : 
          </span>
        {director && director[0].name}
        </div>
    </div>
  )
}

export default Details