import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ExpState } from '../reducers';
import RecCard from './RecCard';

const Recommender = () => {
    const recLists = useSelector((state: ExpState) => state.movieReducer.movieLists);
    const loading = useSelector((state: ExpState) => state.movieReducer.loading);
    console.log("Recommender");
    
    if(loading) {
        return <div>Loading...</div>
    }
    
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 sm:gird-cols-1 gap-0">
    {recLists  && recLists.map((movie:any, index:number) => {
        return (
          <RecCard key={index} movie={movie} />
        )
      },)}
    </div>
  )
}

export default Recommender