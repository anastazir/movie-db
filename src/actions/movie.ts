import * as api from "../api/index"

export const getMovieData  = (id: any) => async (dispatch: any) => {
    console.log("getMovieData", id);
    try{

        dispatch({type: "FETCHING"})

        const {data} = await api.movie_details(id);
        const crew = await api.get_crew(data.imdb_id);
        const recData = await api.recommend_movies(data.imdb_id);
        dispatch({type: "FETCHED", data : {...data, ...crew.data}})
        dispatch({type: "RECOMMENDATIONS", data : recData.data})
    }
    catch(err) {
        console.log(err);
    }
}

export const getMovieRecommendation  = (id: any) => async (dispatch: any) => {
    try{

        const {data} = await api.recommend_movies(id);

        dispatch({type: "RECOMMENDATIONS", data : data})
    }
    catch(err) {
        console.log(err);
    }
}

export const searchMovies = (search: string) => async (dispatch: any) => {
    try{

        dispatch({type: "SEARCHING"})

        const {data} = await api.search_movies(search);

        dispatch({type: "SEARCHED", data : data})
    }
    catch(err) {
        console.log(err);
    }
}

export const trendingMovies = () => async (dispatch: any) => {
    try{

        dispatch({type: "TRENDING"})

        const {data} = await api.trending_movies();

        dispatch({type: "TRENDING_FETCHED", data : data.results})
    }
    catch(err) {
        console.log(err);
    }
}