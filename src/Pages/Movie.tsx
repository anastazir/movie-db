import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { getMovieData, getMovieRecommendation } from '../actions/movie';
import {ExpState} from "../reducers/index"
const Movie = () => {
    const details = useSelector((state: ExpState) => state.movieReducer.details);
    const recommendations = useSelector((state: ExpState) => state.movieReducer.recommendations);

    const dispatch = useDispatch();
    
    const {id} = useParams();

    useEffect(() => {
      dispatch(getMovieData(id));
      dispatch(getMovieRecommendation(id))
        // console.log('useEffect', details);
    },[])

    return (
    <>
      <div>Movie</div>
      <p>{id}</p>
      {recommendations && recommendations.map((item:any, index:number) => {
            return (
              <div key={index}>
                <h1>{item.name}</h1>
                <h2>{item.imdb_id}</h2>
                <p>{item.rating}</p>
                <p>{item.year}</p>
                <p>{item.type}</p>
              </div>
            )
          },)}
    </>
  )
}

export default Movie