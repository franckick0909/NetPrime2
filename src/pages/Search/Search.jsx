import SearchMovie from "../../components/SearchMovie/SearchMovie";
import SearchTv from "../../components/SearchTv/SearchTv";
import "./Search.scss";
import eclair from "../../assets/images/eclair.png";

const Search = () => {
  return (
    <section className="search">
      <h1 className="title-page">Rechercher</h1>
      <div className="search-title">
        <h3>
          <span>Un Film</span>
          <img src={eclair} alt="eclair" className="eclair" />
          <span>Une Série</span>
        </h3>
        </div>
      
      <div className="container-search">
        <div className="movie">
          <SearchMovie />
        </div>
        <div className="tv">
          <SearchTv />
        </div>
      </div>
    </section>
  );
};

export default Search;
