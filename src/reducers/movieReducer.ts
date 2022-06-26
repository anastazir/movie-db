
const movieReducer = (state: any = {details: [], loading: true, movieLists: [], loadingRec: true}, action: any) => {
    switch (action.type){
        case "FETCHED_DETAILS":
          return {details: action.data, loading: false}
        case "FETCHING_DETAILS":
          return {...state, loading: true}
        case "FETCHING_RECOMMENDATIONS":
          return {...state, loadingRec: true}
        case "FETCHED_RECOMMENDATIONS":
          return {...state, movieLists: action.data, loadingRec : false}
        default:
          return state
    }
}

export default movieReducer