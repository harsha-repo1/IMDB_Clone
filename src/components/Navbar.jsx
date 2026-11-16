 import Movie from "../assets/MovieLogo.png"
 import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
        <img className="w-[50px]" src={Movie} alt="" />
        <Link className="text-blue-400 text-3xl font-bold" to="/">Home</Link>
        <Link className="text-blue-400 text-3xl font-bold" to="/watchlist">Watchlist</Link>
    </div>
  )
}

export default Navbar