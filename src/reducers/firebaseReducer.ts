import { RootObject2 } from "../interface/movieInterfaces";

const firebaseReducer = (state: {favLists: RootObject2[], loading: boolean, favIds: number[],} = {favLists : [], loading: true, favIds:[]}, action: any) => {
    switch (action.type){
      case "FIREBASE_LOADING":
        return {...state, loading: true}
      case "FIREBASE_FAVS":
        return {...state, favLists: action.data.list, favIds:action.data.listIds}
      case "FIREBASE_LOADED":
        return {...state, loading: false}
      case "DELETE_DOC":
        return {...state, favLists : state.favLists.filter((movies)=>{
          if (movies.docId !== action.data) return true;
          else return false;
        })}
      default:
        return state
    }
}

export default firebaseReducer