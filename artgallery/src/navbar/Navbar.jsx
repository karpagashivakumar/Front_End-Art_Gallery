import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav1">
      <div className="shop-name">ArtGallery</div>
      <div className="nav">
        <Link className="nav11" to="/">
          Home
        </Link>
        <Link className="nav11" to="/signup">
          Sign up
        </Link>
        <Link className="nav11" to="/login">
          login
        </Link>
        <Link className="nav11" to="/admin">
          Admin
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
