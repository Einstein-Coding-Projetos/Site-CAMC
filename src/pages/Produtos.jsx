// src/pages/Produtos.jsx

import React from "react";
// 1. Importar o componente Card
import Card from "../components/Card";
import "../css/Produtos.css";

function Produtos() {
  // 2. Criar uma lista de produtos (dados de teste)
  const produtos = [
    { id: 1, title: "Adesivos", release_date: "2024", description: "" },
    { id: 2, title: "Moletom", release_date: "2024", description: "" },
    { id: 3, title: "Copos Térmicos", release_date: "2024", description: "" },
  ];

  return (
    <div className="produtos">
      {/* CORRIGIDO: Adicionando a classe "produtos-title" */}
      <h1 className="produtos-title">Catálogo de Produtos</h1>

      <div className="cards-grid">
        {produtos.map((produto) => (
          <Card card={produto} key={produto.id} />
        ))}
      </div>

      {produtos.length === 0 && (
        <div className="produtos-empty">
          <h2>Nenhum produto disponível</h2>
          <p>Volte em breve para conferir as novidades!</p>
        </div>
      )}
    </div>
  );
}

export default Produtos;
