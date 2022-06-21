import {BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import Movie from './Pages/Movie';
import Search from './Pages/Search';


function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movie/details/:id" element={<Movie/>}/>
            <Route path="/movie/search/:search" element={<Search/>}/>
            {/* <Route path="/user" element={<User/>}/>
            <Route path="/login"  element={<Login/>}/>
            <Route path="/signUp" element={<SignUp/>}/> */}
          </Routes>
    </Router>
  );
}

export default App;
