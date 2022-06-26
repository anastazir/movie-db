import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import { RootObject, RootObject2 } from "../interface/movieInterfaces";

type IFooBar = RootObject & RootObject2;
const Favorites = () => {
    const [favorites, setFavorites] = useState<IFooBar[]>(JSON.parse(localStorage.getItem("wishList") || "[]"))
    console.log("favoritesArray", favorites);
    useEffect(() => {
      window.addEventListener('storage',  update)
      return () => {
          window.removeEventListener("storage", update)
        }
    },[])
    const update = () => {
      setFavorites(JSON.parse(localStorage.getItem("wishList") || "[]"))
    }
    return (
      <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6 overflow-hidden pb-9 px-10 py-5">
        {favorites && favorites.map((movie:IFooBar, index:number) => {
          return (
            <MovieCard key={index} movie={movie} type="favorites"/>
          )},
        )}
      </div>
      </>
    )
}

export default Favorites