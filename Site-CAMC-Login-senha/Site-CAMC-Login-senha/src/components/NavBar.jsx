import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/">Site CAMC</Link>
        </div>

        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/produtos" className="nav-link">
            Produtos
          </Link>
          <Link to="/gestao" className="nav-link">
            Gestão
          </Link>
          <Link to="/eventos" className="nav-link">
            Eventos
          </Link>
          <Link to="/agenda" className="nav-link">
            Agenda
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
