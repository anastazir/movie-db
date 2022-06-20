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

          state[0] = [...state[0], ...action.data]
          state[1] = false;
          console.log("state fetcjed", state);

          return state
        case "FETCHING":
          console.log("Fetching", state);

          state[1] = true
          return state
        default:
          return state
    }
}

export default expReducer