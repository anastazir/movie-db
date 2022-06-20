import * as actionTypes from "../constants/exp"
import { MovieDetails } from "../types/fetch"


interface FetchedAction  {
    type: "FETCHED"
    data : MovieDetails
}

interface RecommendAction  {
  type: "RECOMMENDATIONS"
  data : any
}

interface FetchingAction {
  type: "FETCHING"
}

const movieReducer = (state: any = {details: [], loading: false, recommendations: []}, action: FetchedAction | FetchingAction | RecommendAction) => {
    switch (action.type){
        case "FETCHED":
          console.log({...state, details: action.data, loading: false});
          return {details: action.data, loading: false}
        case "FETCHING":
          return {...state, loading: false}
        case "RECOMMENDATIONS":
          console.log(JSON.stringify(action.data));
          
          return {...state, recommendations: action.data}
        default:
          return state
    }
}

export default movieReducer