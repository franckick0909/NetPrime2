import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navTop">
            <NavLink to="/" className={(nav) => (nav.isActive ? "active" : "")}>Home</NavLink>
            <NavLink to="/movie" className={(nav) => (nav.isActive ? "active" : "")}>Movies</NavLink>
            <NavLink to="/tv" className={(nav) => (nav.isActive ? "active" : "")}>Tv</NavLink>
            <NavLink to="/genres" className={(nav) => (nav.isActive ? "active" : "")}>Genres</NavLink>
            <NavLink to="/search" className={(nav) => (nav.isActive ? "active" : "")}>Search</NavLink>
        </nav>
    );
};

export default Navbar;