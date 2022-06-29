import { RootObject2 } from "../interface/movieInterfaces";

const firebaseReducer = (state: {favLists: RootObject2[], loading: boolean, favIds: number[], seen: RootObject2[],} = {favLists : [], loading: true, favIds:[], seen:[]}, action: any) => {
    switch (action.type){
      case "FIREBASE_LOADING":
        return {...state, loading: true}
      case "FIREBASE_FAVS":
        return {...state, favLists: action.data.list, favIds:action.data.listIds}
      case "FIREBASE_SEEN":
          return {...state, seen: action.data}
      case "FIREBASE_LOADED":
        return {...state, loading: false}
      case "DELETE_DOC":
        return {...state, favLists : state.favLists.filter((movies)=>{
          if (movies.original_title !== action.data) return true;
          else return false;
        })}
      default:
        return state
    }
}

export default firebaseReducer