import { useEffect } from 'react'
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../actions/movie';
import Footer from '../Components/Footer';
import MovieCard from '../Components/MovieCard';
import Grid from '../Components/Grid';

const Search = () => {
    const dispatch = useDispatch();
    const {search} = useParams();
    const movies = useSelector((state: any) => state.searchReducer.moviesList);
    const loading = useSelector((state: any) => state.searchReducer.loading);
    document.title = "Search " + search
    useEffect(() =>{
      dispatch(searchMovies(search as string));

    }, [search])

    return (
      <>
        <Grid>
          {loading && <div>Loading...</div>}
          {!loading && movies && movies.map((item:any, index:number) => {
          return (
            <MovieCard movie={item} key={index}/>
          )},)}
        </Grid>
      <Footer />
      </>
    )
}

export default Search