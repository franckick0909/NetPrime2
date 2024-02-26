import "./Card.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Card = () => {
  const { id } = useParams();

  const [card, setCard] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?language=fr-en-US&page=1`;
    const api_key = `1e93c6df58e7f3f360d4dbba44795906`;
    fetch(`${url}&api_key=${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        setCard(data.results);
      });
  }, [id]);

  return (
    <div className="card">
      {card.map((item) => (
        <div key={item.id} className="card__container">
          <div className="card-image">
            <img
              src={`https://image.tmdb.org/t/p/w500/${
                item ? item.poster_path : "No image"
              }`}
              alt={
                item
                  ? item.title || item.name
                  : "Désolé, il n'y a pas de titre !"
              }
            />
            <div className="overlay">
              <Link to={`/detail/${item.id}`} className="link">En voir plus <FaArrowUpRightFromSquare /></Link>
            </div>
          </div>
          <div className="title">
            <h4>
              {item
                ? item.title || item.name
                : "Désolé, il n'y a pas de titre !"}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
