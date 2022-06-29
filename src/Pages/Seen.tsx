import { useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import { RootObject2 } from "../interface/movieInterfaces";
import useAuth from "../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import {  seen } from "../actions/firebase";
import { ExpState } from "../reducers";

const Seen = () => {
    const mr = useSelector((state: ExpState) => state.firebaseReducer.seen) as RootObject2[]
    const loading = useSelector((state: ExpState) => state.firebaseReducer.loading);
  
    const dispatch = useDispatch();

    const {getUser} = useAuth()
      const user = getUser()
      useEffect(() =>{
        dispatch(seen(user?.uid || ""));
      }, [])
      if(!user){
       return ( <div>
          You must be memeber to add and see favorites.
        </div>)
      }else if(loading) return <div>Loading...</div>
      return (
        <>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6 overflow-hidden pb-9 px-10 py-5">
          {mr && mr.map((movie:RootObject2, index:number) => {
            return (
              <MovieCard key={index} movie={movie} type="seen"/>
            )},
          )}
        </div>
        </>
    )
}

export default Seen