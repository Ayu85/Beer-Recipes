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
          <li>Home</li>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
