import { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import {ExpState} from "../reducers/index"
import { FetchData } from '../types/fetch';

const Display = () => {
    const state = useSelector((state: ExpState) => state.expReducer);
    const [data, setData] = useState<Array<FetchData>>(state[0]);
    const fetching = state[1] as typeof Boolean;
    console.log("Display, ",state);
    console.log("data", data);
    useEffect(() => {
        setData(state[0]);
        console.log("data useEffect", data);
    }, [state])
    return (
        <div>
          {!fetching && data.map((item, index) => {
            return (
              <div key={index}>
                <h1>{item.name}</h1>
                <p>{item.email}</p>
              </div>
            )
          },)}
          {state[1]}
        </div>
      );
}

export default Display