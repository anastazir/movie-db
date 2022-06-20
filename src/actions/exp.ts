import { fetch_users } from "../api";

export const getData  = () => async (dispatch: any) => {
    try{
        dispatch({type: "FETCHING"})
        const {data} = await fetch_users();

        dispatch({type: "FETCHED", data : data})
    }
    catch(err) {
        console.log(err);
    }
}