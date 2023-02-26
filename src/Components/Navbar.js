import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/videogame">About</Link>
        <Link to="/shoppingcart">Projects</Link>
        <Link to="/shoppingcart">Résumé</Link>
      </div>
    </>
  );
};

export default Navbar;
