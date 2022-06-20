import React, {useState, useEffect} from 'react';
import {FetchData} from './types/fetch';
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./actions/exp";
import {ExpState} from "./reducers/index"
import Display from './Components/Display';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getData());
  },[])


  return (
    <div className="App">
      <Display />
    </div>
  );
}

export default App;
