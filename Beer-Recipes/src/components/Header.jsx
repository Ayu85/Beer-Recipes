import { Link } from "react-router-dom";
import logo from "../media/logo.png";
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} width={150} />
      </div>
      <div className="nav-buttons">
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
export default Header;
