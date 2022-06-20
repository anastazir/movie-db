import * as actionTypes from "../constants/exp"
import { FetchData } from "../types/fetch"


interface FetchedAction  {
    type: "FETCHED"
    data : Array<FetchData>
}

interface FetchingAction {
  type: "FETCHING"
}


const expReducer = (state: [Array<FetchData>, boolean] = [[], true], action: FetchedAction | FetchingAction) => {
    switch (action.type){
        case "FETCHED":

          console.log("state fetcjed", [[...state[0], action.data], false]);
          state = [[...state[0], ...action.data], false]

          return state
        case "FETCHING":
          
          state[1] = true
          console.log("Fetching", state);
          return [[...state[0]], false]
        default:
          return state
    }
}

export default expReducer