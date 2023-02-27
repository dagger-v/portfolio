import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/about">Projects</Link>
      </div>
    </>
  );
};

export default Navbar;
