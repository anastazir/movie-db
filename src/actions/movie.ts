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

export const trendingMovies = (page:number) => async (dispatch: any) => {
    try{

        dispatch({type: "TRENDING"})

        const {data} = await api.trending_movies(page);

        dispatch({type: "TRENDING_FETCHED", data : data.results})
    }
    catch(err) {
        console.log(err);
    }
}

export const incrementPage = (page:number) => (dispatch: any) => {

    dispatch({type: "INCREMENT_PAGE", data: page})
}

export const genreSearch = (genres:string, page:number) => async (dispatch: any) => {
    try{
        dispatch({type: "FETCHING_GENRES"})
        const {data} = await api.genre_search(genres, page)
        console.log("FETCHING_GENRES", data.results);
        dispatch({type: "GENRE_LIST", data: data.results})
    }
    catch(err) {
        console.log(err);
    }
}