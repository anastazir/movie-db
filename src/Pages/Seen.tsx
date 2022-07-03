import { useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import { RootObject2 } from "../interface/movieInterfaces";
import useAuth from "../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import {  seen } from "../actions/firebase";
import { ExpState } from "../reducers";
import Grid from "../Components/Grid";

const Seen = () => {
      const mr = useSelector((state: ExpState) => state.firebaseReducer.seen) as RootObject2[]
      const loading = useSelector((state: ExpState) => state.firebaseReducer.loading);
      const dispatch = useDispatch();
      const {getUser} = useAuth()
      const user = getUser()
      document.title = "Seen"
      useEffect(() =>{
        dispatch(seen(user?.uid || ""));
      }, [])
      if(!user){
       return ( <div>
          You must be member to add and see favorites.
        </div>)
      }else if(loading) return <div>Loading...</div>
      return (
      <>
        <Grid>
          {mr && mr.map((movie:RootObject2, index:number) => {
            return (
              <MovieCard key={index} movie={movie}/>
            )},
          )}
        </Grid>
      </>
    )
}

export default Seen