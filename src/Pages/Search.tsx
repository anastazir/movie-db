import { useEffect } from 'react'
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../actions/movie';

const Search = () => {
    const dispatch = useDispatch();
    const {search} = useParams();
    const movies = useSelector((state: any) => state.movieReducer.moviesList);
    useEffect(() => {
        dispatch(searchMovies(search as string));
            // console.log('useEffect', details);
        },[])

    return (
        <>
            <div>Search</div>
            <div>{search}</div>
            {movies && movies.map((item:any, index:number) => {
            return (
              <div key={index}>
                <h1>{item.name}</h1>
                <h2>{item.imdb_id}</h2>
                <p>{item.popularity}</p>
                <p>{item.year}</p>
                <p>{item.poster}</p>
              </div>
            )
          },)}
        </>
    )
}

export default Search