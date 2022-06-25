const searchReducer = (state: any = {moviesList: [], loading : true}, action: any) => {
    switch (action.type){
        case "SEARCHING":
          return {...state, loading: true}
        case "SEARCHED":
          return {...state, moviesList: action.data, loading : false}
        default:
          return state
    }
}

export default searchReducer