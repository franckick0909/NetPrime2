import Header from "../../components/Header/Header";
import "./Genres.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Genres = () => {
  const [genre, setGenre] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isActive, setIsActive] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const apikey = "1e93c6df58e7f3f360d4dbba44795906";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}&language=fr-FR`
    )
      .then((response) => response.json())
      .then((data) => setGenre(data.genres));
  }, []);

  const handleClick = (genreId) => {
    setIsActive(genreId);
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=fr-FR&sort_by=popularity.desc&include_adult=true&include_video=true&page=${currentPage}&with_genres=${genreId}`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=fr-FR&sort_by=popularity.desc&include_adult=true&include_video=true&page=${currentPage}&with_genres=${isActive}`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=fr-FR&sort_by=popularity.desc&include_adult=true&include_video=true&page=${currentPage}&with_genres=${isActive}`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  };

  return (
    <section>
      <Header />
      <h1 className="title-page">Genres</h1>
      <div className="top">
        <div className="buttons">
          <button onClick={prevPage} className="btn-page">
            Previous page
          </button>
          <button onClick={nextPage} className="btn-page">
            Next page
          </button>
        </div>
      </div>

      <div className="genre">
        <div className="genre-content">
          {genre.map((genre) => (
            <button
              key={genre.id}
              onClick={() => handleClick(genre.id)}
              className={`button ${isActive === genre.id ? "active" : ""}`}>
              {genre.name}
            </button>
          ))}
        </div>

        <div className="genre-result">
          {movies.map((movie) => (
            <div key={movie.id} className="result-content">
              <div className="image">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.title}
                />

                <div className="overlay">
                  <Link to={`/detailMovie/${movie.id}`} className="link">
                    En voir plus <FaArrowUpRightFromSquare />
                  </Link>
                </div>
              </div>

              <div className="title">
                <h2>{movie.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Genres;
