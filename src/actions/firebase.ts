import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export const favorites = (userId: string) => async (dispatch: any) => {
    dispatch({type: "FIREBASE_LOADING"})
    try {
        const list = <any>[]
        const listIds = <any>[]
        const querySnapshot = await getDocs(collection(db, `${userId}/movies/favorites`))
            querySnapshot.forEach((doc) => {
            list.push({ docId: doc.id, ...doc.data() });
            listIds.push(doc.data().id);
        }
        );
        dispatch({type: "FIREBASE_FAVS", data : {list, listIds}})
    } catch (err) {
        console.log(err);
    }finally {
        dispatch({type: "FIREBASE_LOADED"})
    }
};
