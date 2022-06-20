import React, {useState, useEffect} from 'react';
import {FetchData} from './types/fetch';

function App() {
  const [data, setData] = useState<Array<FetchData>>([]);
  useEffect(() => {
    const fecthMovies = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await response.json() as Array<FetchData>;
      setData(json);
      console.log(json);
    }
    fecthMovies();
  },[])

  return (
    <div className="App">
      {data && data.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <p>{item.email}</p>
          </div>
        )
      },)}
    </div>
  );
}

export default App;
