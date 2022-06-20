import { fetch_movies, recommend_movies } from "../api";

export const getMovieData  = (id: any) => async (dispatch: any) => {
    console.log("getMovieData", id);
    try{

        dispatch({type: "FETCHING"})

        const {data} = await fetch_movies(id);

        dispatch({type: "FETCHED", data : data})
    }
    catch(err) {
        console.log(err);
    }
}

export const getMovieRecommendation  = (id: any) => async (dispatch: any) => {
    console.log("getMovieRecommendation", id);
    try{

        const {data} = await recommend_movies(id);

        dispatch({type: "RECOMMENDATIONS", data : data})
    }
    catch(err) {
        console.log(err);
    }
}