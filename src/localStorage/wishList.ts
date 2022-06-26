import { RootObject, RootObject2 } from "../interface/movieInterfaces";

type IFooBar = RootObject & RootObject2;
export const addToWatchlist = (movie: IFooBar) => {
    const movies:RootObject[] = JSON.parse(localStorage.getItem("wishList") || "[]");
    localStorage.setItem(`wishList`, JSON.stringify([...movies, movie]))
}

export const removeFromWatchlist = (id: number) => {
    const movies:RootObject[] = JSON.parse(localStorage.getItem("wishList") || "[]");
    const filtered = movies.filter(movie =>{
        if (movie.id !== id){
            return true;
        }
    })
    console.log(filtered);
    localStorage.setItem(`wishList`, JSON.stringify(filtered))
    
}

export const isInWatchlist = (id: number | undefined) => {
    const movies:RootObject[] = JSON.parse(localStorage.getItem("wishList") || "[]");
    for (const m of movies){
        console.log(m.id,id);
        if (m.id === (id ? +id : id)){
            console.log("found id ");
            return true
        }
    }
    console.log("not found");
    return false
}