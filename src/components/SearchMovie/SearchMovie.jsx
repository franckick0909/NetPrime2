import "./SearchMovie.scss";
import Header from "../Header/Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const SearchMovie = () => {
  const [results, setResults] = useState([]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [query, setQuery] = useState("");

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=1e93c6df58e7f3f360d4dbba44795906&language=fr&query=${query}&include_adult=true&language=fr-en-US&page=1`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      setResults(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="search">
      <Header />

      <h1 className="titre-search">Un film !</h1>
      <div className="search__value">
        <form className="search-form" onSubmit={searchMovies}>
          <input
            className="search-input"
            type="text"
            placeholder="Rechercher un film"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-btn" type="submit">
            Search
          </button>
        </form>
      </div>

      <div className="results">
        {results.map((result) => (
          <div key={result.id}>
            <div className="results__img">
              <img
                src={`https://image.tmdb.org/t/p/w300/${
                  result.poster_path || result.backdrop_path
                }`}
                alt={result.title}
              />

              <div className="overlay">
                <Link to={`/detailMovie/${result.id}`} className="link">
                  En voir plus <FaArrowUpRightFromSquare />
                </Link>
              </div>
            </div>
            <div className="title">
              <h4>{result.title || "pas de titre"}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchMovie;
