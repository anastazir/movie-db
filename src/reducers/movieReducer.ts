
const movieReducer = (state: any = {details: null, loading: true, movieLists: [], loadingRec: true, director: [], cast: []}, action: any) => {
    switch (action.type){
        case "FETCHED_DETAILS":
          return {details: action.data, loading: false}
        case "FETCHING_DETAILS":
          return {...state, loading: true}
        case "FETCHING_RECOMMENDATIONS":
          return {...state, loadingRec: true}
        case "FETCHED_RECOMMENDATIONS":
          return {...state, movieLists: action.data, loadingRec : false}
        case "CREW_AND_CAST":
          return {...state, director: action.data.director, cast: action.data.cast}
        default:
          return state
    }
}

export default movieReducer