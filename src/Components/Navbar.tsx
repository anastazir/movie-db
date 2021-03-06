import {MenuAlt1Icon, SearchIcon, XCircleIcon} from "@heroicons/react/solid"
import { useEffect, useState } from "react"
import { useNavigate, useLocation} from "react-router-dom"
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(true);
  const [open, setOpen] = useState(false)
  const {getUser, logout} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const {innerWidth:width} = window
  const navbarSm = " pb-12 absolute  z-[12] right-0 w-full  pl-9 transition-all duration-500 ease-in "
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }
  useEffect(() => {
    const handleScroll = () =>{
      if(window.scrollY > 0){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  },[])

  const classes = "cursor-pointer font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3] lg:text-lg"
  const handleClick = () => {
    navigate(`/movie/search/${searchTerm.replace(" ", '-').toLowerCase()}`)
  }

  return (
    <>
    {/* <SEO /> */}
    <header className={`${isScrolled && 'bg-black'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img onClick={() => navigate("/")} src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" width={100} height={100}
        className = "cursor-pointer object-contain"/>
        <ul className={width>600 ? "hidden space-x-4 md:flex " : navbarSm + `${open ? ' top-20':'top-[-490px]'}` }>
          <li onClick={() => navigate("/")} className = {classes + (location.pathname === "/" ? " underline" : "")}>
            Home
          </li>
          <li onClick={() => navigate("/movie/favorites")} className = {classes + (location.pathname === "/movie/favorites" ? " underline" : "")}>
            Favorites
          </li>
          <li onClick={() => navigate("/movie/seen")} className = {classes + (location.pathname === "/movie/seen" ? " underline" : "")}>
            Seen
          </li>
          <li onClick={() => navigate("/movie/genres")} className = {classes + (location.pathname === "/movie/genres" ? " underline" : "")}>
            Genres
          </li>
          <li onClick={() => getUser() ? logout() : navigate("/login")} className = {classes + (location.pathname === "/login" ? " underline" : "")}>
            {getUser() ? "Logout" : "Login" }
          </li>
        </ul>
      </div>
      <div className="relative text-gray-600 focus-within:text-gray-400 ">
        <div onClick={()=>setOpen(!open)} className='absolute right-0 top-2  cursor-pointer md:hidden'>
          {open ? (<MenuAlt1Icon className=" h-6 w-6"/>) : <XCircleIcon className=" h-6 w-6 sm:inline"/>}
        </div>
        <div className="invisible md:visible">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button className="p-1 focus:outline-none focus:shadow-outline" onClick={handleClick}>
              <SearchIcon className=" h-6 w-6 "/>
            </button>
          </span>
          <input type="search" onChange={handleChange} name="q" className="py-2 text-sm text-white bg-gray-900 rounded-md
           pl-10 focus:outline-none focus:bg-black focus:text-white" placeholder="Search..." />
        </div>
      </div>
    </header>
    </>
  )
}

export default Navbar