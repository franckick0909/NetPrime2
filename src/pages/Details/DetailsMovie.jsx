import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./Details.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaArrowUpRightFromSquare,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa6";
import Modal from "../../components/Modal/Modal";

const DetailsMovie = () => {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=1e93c6df58e7f3f360d4dbba44795906&language=fr-en-US&append_to_response=videos,images,credits,release_dates,external_ids&include_image_language=fr,en&include_adult=true`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovieDetails(data);
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) return <div>Loading...</div>;

  return (
    <div className="results">
      <Header />

      <div className="movie-title">
        <h1 className="titre">
          {movieDetails.title || movieDetails.name || "Pas de titre"}
        </h1>

        <div className="slogan">
          <span>
            <FaQuoteLeft />
          </span>
          <h2>{movieDetails.tagline || "Pas encore de slogan"}</h2>
          <span>
            <FaQuoteRight />
          </span>
        </div>
      </div>

      <div className="affiche">
        <img
          src={`https://image.tmdb.org/t/p/original/${
            movieDetails.backdrop_path ||
            movieDetails.profile_path ||
            movieDetails.poster_path ||
            "No image"
          }`}
          alt={movieDetails.title || movieDetails.name}
        />
      </div>

      <div className="details">
        <div className="details__image">
          <img
            src={`https://image.tmdb.org/t/p/original/${
              movieDetails
                ? movieDetails.poster_path ||
                  movieDetails.profile_path ||
                  movieDetails.backdrop_path ||
                  movieDetails.still_path ||
                  movieDetails.logo_path
                : "No image"
            }`}
            alt={
              movieDetails.title || movieDetails.name || "Pas encore de titre"
            }
          />
        </div>

        <div className="details__description">
          <div className="popularity">
            <p>
              <b>Popularity : </b>
              {movieDetails.popularity || "Pas encore de popularité"}
            </p>
          </div>
          <div className="release">
            <p>
              <b>Release Date : </b>
              {movieDetails.release_date ||
                movieDetails.first_air_date ||
                "Pas encore de date de sortie"}
            </p>
          </div>
          <div className="vote">
            <p>
              <b>Moyenne des votes : </b>
              {movieDetails ? movieDetails.vote_average : "Pas encore de vote"}
              <FaStar className="star" />
            </p>
          </div>
          <div className="vote-count">
            <p>
              <b>Décompte des voix : </b>
              {movieDetails.vote_count || "Pas encore de vote"}
            </p>
          </div>
          <div className="original-title">
            <p>
              <b>Titre original : </b>
              {movieDetails.original_title || movieDetails.original_name}
            </p>
          </div>
          <div className="overview">
            <p>
              <b>Overview : </b>
              {movieDetails.overview || "Pas encore de description"}
            </p>
          </div>

          <div className="budget">
            <p>
              <b>Budget : </b>
              {movieDetails.budget || "Désolé, il n'y a pas de budget !"}$
            </p>
          </div>
          <div className="revenue">
            <p>
              <b>Revenue : </b>
              {movieDetails.revenue || "Désolé, il n'y a pas de revenu !"}$
            </p>
          </div>

          <div className="homepage">
            <p>
              <b>Page d{"'"}accueil : </b>
              <a
                href={movieDetails.homepage}
                target="_blank"
                rel="noreferrer"
                className="homepage__link">
                {movieDetails.homepage || "Pas encore de page d'accueil"}
              </a>
            </p>
          </div>

          <div className="production">
            <p>
              <b>Société de production : </b>
              {movieDetails.production_companies &&
                movieDetails.production_companies.map((company) => (
                  <span key={company.id}>
                    {company.name || company.title || "Pas de compagnie"}
                    {", "}
                  </span>
                ))}
            </p>
          </div>

          <div className="production">
            <p>
              <b>Pays de production : </b>
              {movieDetails.production_countries &&
                movieDetails.production_countries.map((country, idx) => (
                  <span key={idx}>
                    {country.name || country.title || "No country"}
                    {", "}
                  </span>
                ))}
            </p>
          </div>

          <div className="genres">
            <p>
              <b>Genres : </b>
              {movieDetails.genres &&
                movieDetails.genres.map((genre) => (
                  <button key={genre.id} className="link">
                    {genre.name || "Désolé, pas encore de genre"}
                  </button>
                ))}
            </p>
          </div>

          <div className="spoken">
            <p>
              <b>Langues parlées : </b>
              {movieDetails.spoken_languages &&
                movieDetails.spoken_languages.map((language) => (
                  <span key={language.iso_639_1}>
                    {language.name || "Désolé, pas de langage"}
                    {", "}
                  </span>
                ))}
            </p>
          </div>

          <div className="runtime">
            <p>
              <b>Runtime : </b>
              {movieDetails.runtime} minutes
            </p>
          </div>
        </div>
      </div>

      <div className="container-bottom">
        <div className="compagny-logo">
          <div className="bloc">
            <b>Logo de production : </b>
            {movieDetails.production_companies &&
              movieDetails.production_companies.map((company) => (
                <img
                  src={
                    `https://image.tmdb.org/t/p/w200${company.logo_path}` ||
                    "https://image.tmdb.org/t/p/w200/none" ||
                    "No image"
                  }
                  alt={""}
                  key={company.id}
                />
              ))}
          </div>
        </div>
        <div className="cast">
          <p>
            <b>Cast : </b>
            {movieDetails.credits &&
              movieDetails.credits.cast.map((actor) => (
                <span key={actor.id}>
                  {actor.name || "Pas encore de nom d'acteur"}
                  {", "}
                </span>
              ))}
          </p>
        </div>

        <div className="videos">
          <p className="trait">
            <b>Vidéos :</b>
          </p>
          <div className="videos__container">
            {movieDetails.videos &&
              movieDetails.videos.results.map((video) => (
                <div key={video.id} className="video">
                  <iframe
                    width="500"
                    height="280"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title={video.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                  <p>{video.name}</p>
                </div>
              ))}
          </div>
        </div>

        <div className="images">
          <p className="trait">
            <b>Images :</b>
          </p>
          <div className="images__container">
            {movieDetails.images &&
              movieDetails.images.backdrops.map((image) => (
                <img
                  src={`https://image.tmdb.org/t/p/w300/${image.file_path}`}
                  alt={image.file_path}
                  key={image.file_path}
                />
              ))}
          </div>
        </div>

        <div className="casting">
          <p className="trait">
            <b>Castings :</b>
          </p>
          <div className="casting__container">
            {movieDetails.credits &&
              movieDetails.credits.cast.map((actor) => (
                <div key={actor.id} className="actor">
                  <div className="image">
                    <div className="overlay"></div>
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                      alt={actor.name}
                    />
                  </div>
                  <Modal
                    imageSrc={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                    title={actor.name}
                  />
                  <div className="title">
                    <p>{actor.name}</p>
                    <p>{actor.character}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="buttons">
          <Link to="/" className="link">
            Back to Home <FaArrowUpRightFromSquare />
          </Link>
          <Link to="/movie" className="link">
            Back to Movie <FaArrowUpRightFromSquare />
          </Link>
          <Link to="/tv" className="link">
            Back to Tv <FaArrowUpRightFromSquare />
          </Link>
          <Link to="/genres" className="link">
            Back to Genres <FaArrowUpRightFromSquare />
          </Link>
          <Link to="/search" className="link">
            Back to Search <FaArrowUpRightFromSquare />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsMovie;
