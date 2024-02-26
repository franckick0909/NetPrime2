import Navbar from "../Navbar/Navbar";
import "./Header.scss";

const Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <h2 className="title-logo titre">MovieDB</h2>
        </div>
        <Navbar />
      </div>
    );
};

export default Header;