import * as api from "../api/index"

export const getMovieAndRecommendations  = (id: string | undefined) => async (dispatch: any) => {
    try{

        dispatch({type: "FETCHING_DETAILS"})
        const {data} = await api.movie_details(id);
        const crew = await api.get_crew(data.imdb_id);
        dispatch({type: "FETCHED_DETAILS", data : {...data, ...crew.data}})

        dispatch({type: "FETCHING_RECOMMENDATIONS"})
        const genres = data?.genres?.map((genre:any, index:number) => {
            return genre.id
        }).join(",")    
        const promise = await Promise.all([api.get_similar_movies(data.id),  api.genre_search(genres), api.recommend_movies_web(data.id)])

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