
const movieReducer = (state: any = {details: [], loading: false, movieLists: []}, action: any) => {
    switch (action.type){
        case "FETCHED":
          return {details: action.data, loading: false}
        case "FETCHING":
          return {...state, loading: false}
        case "RECOMMENDATIONS":
          return {...state, movieLists: action.data}
        default:
          return state
    }
}

export default movieReducer