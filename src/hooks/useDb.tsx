import { onAuthStateChanged } from 'firebase/auth'
import { collection, doc, addDoc, deleteDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { auth, db } from '../Firebase/firebase'
import { RootObject2 } from '../interface/movieInterfaces'

const useDb = () => {
  const [id, setId] = useState<string | null >(null)
  useEffect(() =>
  onAuthStateChanged(auth, (user) => {
      if (user) {
          setId(user.uid)
      } else {
          console.log("user not logged in");
      }
  }),[db])

  const addToList = async(movie: RootObject2) => {
    await addDoc(collection(db, `${id}/movies/favorites`), {
      adult: movie.adult,
      backdrop_path: movie.backdrop_path,
      genre_ids: movie.genre_ids,
      id: movie.id,
      title: movie.title,
      original_title: movie.original_title,
      overview: movie.overview,
      popularity: movie.popularity,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
    }).then((details)=>{
      console.log("saved");
    }).catch((err)=>{
      console.log("error", err);
    })
  }

  const addToHistory = async(movie: RootObject2 & RootObject) => {
    if (!movie){
      return
    }
    await addDoc(collection(db, `${id}/movies/history`), {
      adult: movie.adult,
      backdrop_path: movie.backdrop_path,
      id: movie.id,
      title: movie.title,
      original_title: movie.original_title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
    }).then((details)=>{
      console.log("saved to history");
    }).catch((err)=>{
      console.log("error", err);
    })
  }

  }
    return {addToList, deleteFavorites}
}

export default useDb