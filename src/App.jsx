import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import Tv from "./pages/Tv/Tv";
import Error from "./pages/Error/Error";
import Search from "./pages/Search/Search";
import DetailsMovie from "./pages/Details/DetailsMovie";
import DetailsTv from "./pages/Details/DetailsTv";
import Genres from "./pages/Genres/Genres";


const App = () => {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/NetPrime2" element={<Home />} />
          <Route path="/detailMovie/:id" element={<DetailsMovie />} />
          <Route path="/detailTv/:id" element={<DetailsTv />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/search" element={<Search />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;