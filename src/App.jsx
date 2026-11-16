import { useState } from "react";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  let [watchlist,setwatchlist] = useState([])
  let handleWatchList =(movie)=>{
    let newWatchlist = [...watchlist,movie]
    setwatchlist(newWatchlist)
    console.log(newWatchlist)

  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Banner/><Movies handleWatchList={handleWatchList} /></> }/>
          <Route path="watchlist" element={<WatchList />}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
