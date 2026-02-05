import React from "react";
import "../css/Produtos.css";

import ad1 from "../assets/ad1.png";
import ad2 from "../assets/ad2.png";
import ad3 from "../assets/ad3.png";
import ad4 from "../assets/ad4.png";
import ad5 from "../assets/ad5.png";
import ad6 from "../assets/ad6.png";
import ad7 from "../assets/ad7.png";
import ad8 from "../assets/ad8.png";
import ad9 from "../assets/ad9.png";

import moletom1 from "../assets/moletom1.png";
import moletom2 from "../assets/moletom2.png";

import copo from "../assets/copo.png";

function ProdutoCard({ fotoUrl, variant, preco, esgotado }) {
  return (
    <article className={`produto-card ${variant ? `produto-card--${variant}` : ""}`}>
      {/* Badge ESGOTADO */}
      {esgotado && <span className="produto-badge">ESGOTADO</span>}

      <div className={`produto-imgWrap ${variant ? `produto-imgWrap--${variant}` : ""}`}>
        <img className="produto-img" src={fotoUrl} alt="Produto" />
      </div>

      <p className="produto-preco">{preco}</p>
    </article>
  );
}

function ProdutoSection({ titulo, itens, emptyText }) {
  const isEmpty = !Array.isArray(itens) || itens.length === 0;

  return (
    <section className="produtos-frame">
      <h2 className="produtos-sectionTitle">{titulo}</h2>

      {isEmpty ? (
        <p className="produtos-empty">{emptyText || "Em breve!"}</p>
      ) : (
        <div className="produtos-grid">
          {itens.map((item, idx) => (
            <ProdutoCard
              key={`${titulo}-${idx}`}
              fotoUrl={item.fotoUrl}
              variant={item.variant}
              preco={item.preco}
              esgotado={item.esgotado}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default function Produtos() {
  const adesivos = [
    { fotoUrl: ad1, preco: "R$ 4,00", esgotado: true },
    { fotoUrl: ad2, preco: "R$ 4,00", esgotado: true },
    { fotoUrl: ad3, preco: "R$ 4,00", esgotado: true }, 
    { fotoUrl: ad4, preco: "R$ 4,00", esgotado: true },
    { fotoUrl: ad5, preco: "R$ 4,00", esgotado: true },
    { fotoUrl: ad6, preco: "R$ 4,00", esgotado: true },
    { fotoUrl: ad7, preco: "R$ 4,00", esgotado: true },
    { fotoUrl: ad8, preco: "R$ 4,00", esgotado: true },
    { fotoUrl: ad9, preco: "R$ 4,00", esgotado: true},
  ];

  const roupas = [
    { fotoUrl: moletom1, variant: "big", preco: "R$ 120,00", esgotado: true },
    { fotoUrl: moletom2, variant: "big", preco: "R$ 120,00", esgotado: true }, 
  ];

  const copos = [{ fotoUrl: copo, variant: "copo", preco: "R$ 40,00", esgotado: true }];

  return (
    <main className="produtos">
      <div className="produtos-container">
        <h1 className="produtos-title">Produtos</h1>

        <div className="produtos-content">
          <div className="produtos-stack">
            <ProdutoSection titulo="Adesivos" itens={adesivos} />
            <ProdutoSection titulo="Roupas" itens={roupas} />
            <ProdutoSection titulo="Copos" itens={copos} />
          </div>
        </div>
      </div>
    </main>
  );
}
