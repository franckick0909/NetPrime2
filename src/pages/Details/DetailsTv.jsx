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

const DetailsTv = () => {
  const { id } = useParams();

  const [tvDetails, setTvDetails] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = `https://api.themoviedb.org/3/tv/${id}?api_key=1e93c6df58e7f3f360d4dbba44795906&language=fr-en-US&append_to_response=videos,images,credits,release_dates,external_ids&include_image_language=fr,en&include_adult=true`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTvDetails(data);
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!tvDetails) return <div>Loading...</div>;

  return (
    <div className="results">
      <Header />

      <div className="movie-title">
        <h1 className="titre">
          {tvDetails.name || tvDetails.title || "Pas de titre"}
        </h1>

        <div className="slogan">
          <span>
            <FaQuoteLeft />
          </span>
          <h2>{tvDetails.tagline || "Pas encore de slogan"}</h2>
          <span>
            <FaQuoteRight />
          </span>
        </div>
      </div>

      <div className="affiche">
        <img
          src={`https://image.tmdb.org/t/p/original/${
            tvDetails.backdrop_path ||
            tvDetails.profile_path ||
            tvDetails.poster_path ||
            "No image"
          }`}
          alt={tvDetails.title || tvDetails.name}
        />
      </div>

      <div className="details">
        <div className="details__image">
          <img
            src={`https://image.tmdb.org/t/p/original/${
              tvDetails
                ? tvDetails.poster_path ||
                  tvDetails.profile_path ||
                  tvDetails.backdrop_path ||
                  tvDetails.still_path ||
                  tvDetails.logo_path
                : "No image"
            }`}
            alt={tvDetails.title || tvDetails.name || "Pas encore de titre"}
          />
        </div>

        <div className="details__description">
          <div className="popularity">
            <p>
              <b>Popularité : </b>
              {tvDetails.popularity || "Pas encore de popularité"}
            </p>
          </div>
          <div className="release">
            <p>
              <b>Date de sortie : </b>
              {tvDetails.release_date ||
                tvDetails.first_air_date ||
                "Pas encore de date de sortie"}
            </p>
          </div>

          <div className="lastairdate">
            <p>
              <b>Date de la dernière diffusion : </b>
              {tvDetails.last_air_date || "Pas encore de date de sortie"}
            </p>
          </div>

          <div className="vote">
            <p>
              <b>Moyenne des votes : </b>
              {tvDetails ? tvDetails.vote_average : "Pas encore de vote"}
              <FaStar className="star" />
            </p>
          </div>
          <div className="vote-count">
            <p>
              <b>Décompte des voix : </b>
              {tvDetails.vote_count || "Pas encore de vote"}
            </p>
          </div>
          <div className="original-title">
            <p>
              <b>Titre original : </b>
              {tvDetails.original_title || tvDetails.original_name}
            </p>
          </div>

          <div className="created">
            <p>
              <b>Créé par : </b>
              {tvDetails.created_by &&
                tvDetails.created_by.map((creator) => (
                  <span key={creator.id}>
                    {creator.name || "Pas encore de créateur"}
                    {", "}
                  </span>
                ))}
            </p>
          </div>

          <div className="overview">
            <p>
              <b>Synopsis : </b>
              {tvDetails.overview || "Pas encore de description"}
            </p>
          </div>

          <div className="seasons">
            <p>
              <b>Nombre de saison : </b>
              {tvDetails.number_of_seasons || "Pas encore de saison"}
              <span> saisons</span>
            </p>
          </div>

          <div className="episodes">
            <p>
              <b>Nombre d{"'"}épisodes : </b>
              {tvDetails.number_of_episodes || "Pas encore d'épisode"}
              <span> épisodes</span>
            </p>
          </div>

          <div className="homepage">
            <p>
              <b>Page d{"'"}accueil : </b>
              <a
                href={tvDetails.homepage}
                target="_blank"
                rel="noreferrer"
                className="homepage__link">
                {tvDetails.homepage || "Pas encore de page d'accueil"}
              </a>
            </p>
          </div>

          <div className="production">
            <p>
              <b>Société de production : </b>
              {tvDetails.production_companies &&
                tvDetails.production_companies.map((company) => (
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
              {tvDetails.production_countries &&
                tvDetails.production_countries.map((country, idx) => (
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
              {tvDetails.genres &&
                tvDetails.genres.map((genre) => (
                  <button key={genre.id} className="link">
                    {genre.name || "Désolé, pas encore de genre"}
                  </button>
                ))}
            </p>
          </div>

          <div className="spoken">
            <p>
              <b>Langues parlées : </b>
              {tvDetails.spoken_languages &&
                tvDetails.spoken_languages.map((language) => (
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
              {tvDetails.episode_run_time} minutes
            </p>
          </div>
        </div>
      </div>

      <div className="container-bottom">
        <div className="compagny-logo">
          <div className="bloc">
            <b>Logo de production : </b>
            {tvDetails.production_companies &&
              tvDetails.production_companies.map((company) => (
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
            {tvDetails.credits &&
              tvDetails.credits.cast.map((actor) => (
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
            {tvDetails.videos &&
              tvDetails.videos.results.map((video) => (
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
            {tvDetails.images &&
              tvDetails.images.backdrops.map((image) => (
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
            {tvDetails.credits &&
              tvDetails.credits.cast.map((actor) => (
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
          <Link to="/NetPrime2" className="link">
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

export default DetailsTv;
