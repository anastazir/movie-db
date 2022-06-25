interface TrendingAction {
    type: "TRENDING"
  }
  
  interface TrendingActionFetched{
    type: "TRENDING_FETCHED"
    data : any
  }

  interface IncrementPage{
    type: "INCREMENT_PAGE"
    data : number
  }

const trendingReducer = (state: any = {loading: true, movieLists: [], page: 1}, action: TrendingAction | TrendingActionFetched | IncrementPage) => {
    switch (action.type){
        case "TRENDING_FETCHED":
          return {movieLists: [...state.movieLists,...action.data], loading: false, page:state.page}
        case "TRENDING":
          return {...state, loading: true}
        case "INCREMENT_PAGE":
          return {page:action.data, ...state}
        default:
          return state
    }
}

export default trendingReducer 