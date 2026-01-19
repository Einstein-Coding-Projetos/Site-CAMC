import "./css/App.css";
// Importação de todos os componentes de página da pasta 'pages'
import Home from "./pages/Home";
import Eventos from "./pages/Eventos";
import Gestao from "./pages/Gestao";
import Produtos from "./pages/Produtos";
import Agenda from "./pages/Agenda";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      {/* O NavBar fica fora do <Routes> para ser exibido em todas as páginas */}
      <NavBar />
      <main className="main-content">
        <Routes>
          {/* Rota da Página Inicial (Home) */}
          <Route path="/" element={<Home />} />

          {/* Nova Rota para Eventos */}
          <Route path="/eventos" element={<Eventos />} />

          {/* Route for Agenda */}
          <Route path="/agenda" element={<Agenda />} />

          {/* Nova Rota para Gestão */}
          <Route path="/gestao" element={<Gestao />} />

          {/* Rota para Produtos (que você usava como 'Favorites') */}
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
