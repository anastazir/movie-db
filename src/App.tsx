import {BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import Movie from './Pages/Movie';


function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movie/:id" element={<Movie/>}/>
            {/* <Route path="/user" exact = {`${true}`} element={<User/>}/>
            <Route path="/login" exact = {`${true}`} element={<Login/>}/>
            <Route path="/signUp" exact = {`${true}`} element={<SignUp/>}/> */}
          </Routes>
    </Router>
  );
}

export default App;
