import React, { useState, useEffect } from "react";
import "../css/Produtos.css";
import Modal from "../components/Modal";
import { getProducts, API_URL } from "../services/api";

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

function ProdutoCard({ fotoUrl, variant, preco, esgotado, onClick }) {
  return (
    <article
      className={`produto-card ${variant ? `produto-card--${variant}` : ""} ${onClick ? "produto-card--clickable" : ""}`}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {/* Badge ESGOTADO */}
      {esgotado && <span className="produto-badge">ESGOTADO</span>}

      <div className={`produto-imgWrap ${variant ? `produto-imgWrap--${variant}` : ""}`}>
        <img className="produto-img" src={fotoUrl} alt="Produto" />
      </div>

      <p className="produto-preco">{preco}</p>
    </article>
  );
}

function ProdutoSection({ titulo, itens, emptyText, onProdutoClick }) {
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
              onClick={onProdutoClick ? () => onProdutoClick(item) : undefined}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default function Produtos() {
  const [strapiProdutos, setStrapiProdutos] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      const resp = await getProducts();
      if (resp && resp.data) {
        // Transform the Strapi data into the structure expected by ProdutoCard
        const formatted = resp.data.map((item) => {
          let imageUrl = "https://via.placeholder.com/300x300?text=Sem+Imagem"; // Default fallback

          // Strapi v5 media fields (like 'images' or 'foto') return an array or object
          // The curl response showed 'images' as an array
          if (item.images && item.images.length > 0) {
            imageUrl = item.images[0].url.startsWith("http")
              ? item.images[0].url
              : `${API_URL}${item.images[0].url}`;
          } else if (item.foto && item.foto.url) { // Fallback in case the field is named 'foto'
            imageUrl = item.foto.url.startsWith("http")
              ? item.foto.url
              : `${API_URL}${item.foto.url}`;
          }

          // Format price (assuming Strapi field is 'price' or 'preco')
          const valor = item.price !== undefined ? item.price : item.preco;
          const precoFormatado = valor !== undefined && valor !== null
            ? `R$ ${Number(valor).toFixed(2).replace('.', ',')}`
            : "R$ 0,00";

          // Parse rich text description if necessary
          let descText = "Sem descrição";
          if (typeof item.description === 'string') {
            descText = item.description;
          } else if (Array.isArray(item.description)) {
            descText = item.description[0]?.children?.[0]?.text || "Sem descrição";
          }

          return {
            id: item.id || item.documentId,
            name: item.name || "Produto",
            fotoUrl: imageUrl,
            variant: item.variant || "",
            preco: precoFormatado,
            esgotado: item.esgotado || item.stock === 0 || false, // 'stock' field was in curl response
            description: descText,
            stock: item.stock !== undefined ? item.stock : null
          };
        });
        setStrapiProdutos(formatted);
      }
    }

    fetchProducts();
  }, []);

  const adesivos = [
    { fotoUrl: ad1, preco: "R$ 4,00", esgotado: true },
    { fotoUrl: ad2, preco: "R$ 4,00", esgotado: true },
    { fotoUrl: ad3, preco: "R$ 4,00", esgotado: true },
    { fotoUrl: ad4, preco: "R$ 4,00", esgotado: true },
    { fotoUrl: ad5, preco: "R$ 4,00", esgotado: true },
    { fotoUrl: ad6, preco: "R$ 4,00", esgotado: true },
    { fotoUrl: ad7, preco: "R$ 4,00", esgotado: true },
    { fotoUrl: ad8, preco: "R$ 4,00", esgotado: true },
    { fotoUrl: ad9, preco: "R$ 4,00", esgotado: true },
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
            {/* New section for Strapi products at the very top */}
            <ProdutoSection
              titulo="Produtos em estoque"
              itens={strapiProdutos}
              emptyText="Nenhum produto em estoque no momento."
              onProdutoClick={(produto) => setSelectedProduct(produto)}
            />

            <ProdutoSection titulo="Adesivos" itens={adesivos} />
            <ProdutoSection titulo="Roupas" itens={roupas} />
            <ProdutoSection titulo="Copos" itens={copos} />
          </div>
        </div>

        {/* Modal overlay to show product details */}
        <Modal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          title={selectedProduct?.name || "Detalhes do Produto"}
        >
          {selectedProduct && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <img
                src={selectedProduct.fotoUrl}
                alt={selectedProduct.name}
                style={{ width: '100%', maxHeight: '300px', objectFit: 'contain', backgroundColor: '#f9fafb', borderRadius: '8px', padding: '1rem' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#B35A22' }}>{selectedProduct.preco}</span>
                {selectedProduct.stock !== null && (
                  <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    Estoque: {selectedProduct.stock} un.
                  </span>
                )}
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{selectedProduct.description}</p>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </main>
  );
}
