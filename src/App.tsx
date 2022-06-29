import {BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { Home } from './Pages/Home';
import Movie from './Pages/Movie';
import Search from './Pages/Search';
import Genres from './Pages/Genres';
import Favorites from './Pages/Favorites';
import Login from './Pages/Login';
import { AuthProvider } from './hooks/useAuth';
import Seen from './Pages/Seen';


function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="justify-between relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie/details/:id" element={<Movie/>}/>
          <Route path="/movie/search/:search" element={<Search/>}/>
          <Route path="/movie/genres" element={<Genres/>}/>
          <Route path="/movie/favorites" element={<Favorites />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/movie/seen" element={<Seen/>}/>

        </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
