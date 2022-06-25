interface Genres{
    genres: string
    movieLists: string[]
    loading: boolean
    page: number
}

const genreReducer = (state: Genres = {genres: "", movieLists: [], loading: false, page: 1}, action: any) => {
    switch (action.type){
        case "FETCHING_GENRES":
          return {...state, loading: true}
        case "GENRE_LIST":
          return {...state, movieLists: [...state.movieLists,...action.data], loading: false}
        default:
          return state
    }
}

export default genreReducer