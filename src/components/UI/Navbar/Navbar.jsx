import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { useContext } from "react";
import { AuthContext } from "../../../context";

export const Navbar = () => {

  const {isAuth, setIsAuth} = useContext(AuthContext);

  const exit = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <nav className="navbar">
      <Button onClick={exit} style={{right: 0, position: "absolute", top: 10}}>
        Выйти
      </Button>
      <div className="navbar__links">
        <Link to="/home">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};
