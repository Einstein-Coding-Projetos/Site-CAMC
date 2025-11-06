import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* ALTERAÇÃO AQUI: Mudando o texto do projeto para o novo nome */}
        <Link to="/">Site CAMC</Link>
      </div>
      <div className="navbar-links">
        {/* Estes links já estão corretos e correspondem ao App.jsx */}
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
      </div>
    </nav>
  );
}

export default NavBar;
