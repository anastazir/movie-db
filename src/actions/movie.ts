import * as api from "../api/index"

export const getMovieData  = (id: string | undefined) => async (dispatch: any) => {
    try{

        dispatch({type: "FETCHING_DETAILS"})
        const {data} = await api.movie_details(id);
        const crew = await api.get_crew(data.imdb_id);
        dispatch({type: "FETCHED_DETAILS", data : {...data, ...crew.data}})

    }
    catch(err) {
        console.log(err);
    }
}

export const getMovieRecommendation  = (id: string, genres: string) => async (dispatch: any) => {
    dispatch({type: "FETCHING_RECOMMENDATIONS"})
    try{
        // console.log(id, genres);
        const promise = await Promise.all([api.get_similar_movies(id),  api.genre_search(genres), api.recommend_movies_web(id)])
        // console.log("Promise.all", );
        // const {data: similarMovies} = await api.get_similar_movies(id)
        // const {data: genreRecommendations} = await api.genre_search(genres)
        // const {data: webRecommendations} = await api.recommend_movies_web(id);

        dispatch({type: "FETCHED_RECOMMENDATIONS", data : promise.map((a : any) => a.data.results)})
    }
    catch(err) {
        console.log(err);
    }
}

export const searchMovies = (search: string) => async (dispatch: any) => {
    try{

        dispatch({type: "SEARCHING"})

        const {data} = await api.search_movies(search);

        dispatch({type: "SEARCHED", data : data.results})
    }
    catch(err) {
        console.log("searchMovies",err);
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