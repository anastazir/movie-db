import { useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import { RootObject2 } from "../interface/movieInterfaces";
import useAuth from "../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { favorites } from "../actions/firebase";
import { ExpState } from "../reducers";
import Grid from "../Components/Grid";

const Favorites = () => {
    const favLists = useSelector((state: ExpState) => state.firebaseReducer.favLists) as RootObject2[]
    const loading = useSelector((state: ExpState) => state.firebaseReducer.loading);
    const dispatch = useDispatch();
    
    document.title = "Favorites";
    const {getUser} = useAuth()
    const user = getUser()
    useEffect(() =>{
      dispatch(favorites(user?.uid || ""));

    }, [])
    if(!user){
     return (
      <div>
        You must be memeber to add and see favorites.
      </div>
      )
    }else if(loading) return <div>Loading...</div>
    return (
      <>
      <Grid>
        {favLists && favLists.map((movie:RootObject2, index:number) => {
          return (
            <MovieCard key={index} movie={movie}/>
          )},
        )}
      </Grid>
      </>
    )
}

export default Favorites