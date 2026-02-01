// src/pages/Produtos.jsx
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

function ProdutoCard({ fotoUrl, variant }) {
  return (
    <article className={`produto-card ${variant ? `produto-card--${variant}` : ""}`}>
      <div className={`produto-imgWrap ${variant ? `produto-imgWrap--${variant}` : ""}`}>
        <img className="produto-img" src={fotoUrl} alt="Produto" />
      </div>
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
          {itens.map((item, idx) => {
            const fotoUrl = typeof item === "string" ? item : item.fotoUrl;
            const variant = typeof item === "string" ? undefined : item.variant;

            return (
              <ProdutoCard
                key={`${titulo}-${idx}`}
                fotoUrl={fotoUrl}
                variant={variant}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default function Produtos() {
  const adesivos = [ad1, ad2, ad3, ad4, ad5, ad6, ad7, ad8, ad9];

  // ✅ moletons maiores
  const roupas = [
    { fotoUrl: moletom1, variant: "big" },
    { fotoUrl: moletom2, variant: "big" },
  ];

  // ✅ copo com formato vertical (não quadrado)
  const copos = [{ fotoUrl: copo, variant: "copo" }];

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
