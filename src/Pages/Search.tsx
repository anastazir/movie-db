import { useEffect } from 'react'
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../actions/movie';
import RecCard from '../Components/RecCard';
import Footer from '../Components/Footer';

const Search = () => {
    const dispatch = useDispatch();
    const {search} = useParams();
    const movies = useSelector((state: any) => state.searchReducer.moviesList);
    const loading = useSelector((state: any) => state.searchReducer.loading);
    
    useEffect(() =>{
      dispatch(searchMovies(search as string));

    }, [search])

    return (
      <>
        <div className="grid sm:gird-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6 overflow-hidden pb-9 px-10 py-5">
          {loading && <div>Loading...</div>}
          {!loading && movies.map((item:any, index:number) => {
          return (
            <RecCard movie={item} index={index} />
          )},)}
        </div>
      <Footer />
      </>
    )
}

export default Search