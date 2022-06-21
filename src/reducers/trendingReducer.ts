interface TrendingAction {
    type: "TRENDING"
  }
  
  interface TrendingActionFetched{
    type: "TRENDING_FETCHED"
    data : any
  }

const trendingReducer = (state: any = {loading: false, movieLists: []}, action: TrendingAction | TrendingActionFetched ) => {
    switch (action.type){
        case "TRENDING_FETCHED":
          console.log({movieLists: action.data, loading: false});
          return {movieLists: action.data, loading: false}
        case "TRENDING":
          return {...state, loading: true}
        default:
          return state
    }
}

export default trendingReducer 