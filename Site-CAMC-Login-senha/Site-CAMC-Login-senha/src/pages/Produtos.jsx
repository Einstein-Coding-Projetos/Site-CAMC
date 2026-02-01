// src/pages/Produtos.jsx

import React, { useEffect, useState } from "react";
// 1. Importar o componente Card
import Card from "../components/Card";
import "../css/Produtos.css";
// Importar api para buscar produtos do Strapi
import { getProducts, API_URL } from "../services/api";

function Produtos() {
  // 2. Criar uma lista de produtos (dados de teste - Mantidos a pedido do usuário)
  const produtosFixos = [
    { id: 101, title: "Adesivos", release_date: "2024", description: "" },
    { id: 102, title: "Moletom", release_date: "2024", description: "" },
    { id: 103, title: "Copos Térmicos", release_date: "2024", description: "" },
  ];

  // Estado para os produtos do Strapi
  const [produtosEstoque, setProdutosEstoque] = useState([]);
  const [loading, setLoading] = useState(true);

  // Estado para o Modal de Zoom na imagem (Adicionado para permitir clique na foto)
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        if (data && data.data) {
          const formattedProducts = data.data.map((item) => {
            // Strapi v5 flat structure (baseado no schema.json)
            // Campos: name, price, description, stock, images
            const { name, description, price, stock, images } = item;

            // Image handling (agora usando 'images' em vez de 'cover')
            let imageUrl = null;
            if (images && Array.isArray(images) && images.length > 0) {
              imageUrl = images[0].url;
            } else if (images && images.url) {
              imageUrl = images.url;
            }

            const fullImageUrl = imageUrl ? `${API_URL}${imageUrl}` : null;

            // Descrição e Valor
            let descText = description || "";
            if (typeof description === 'object' && Array.isArray(description)) {
              descText = description[0]?.children?.[0]?.text || "";
            }

            const priceText = price ? `R$ ${price}` : "";
            const finalDesc = priceText ? `${descText} - ${priceText}` : descText;

            // Lógica de Estoque
            let stockInfo = "Sob consulta";
            if (stock !== undefined && stock !== null) {
              if (stock > 0) {
                stockInfo = `Unidades disponíveis: ${stock}`;
              } else {
                stockInfo = "Esgotado";
              }
            } else {
              stockInfo = "Unidades disponíveis: Sob consulta";
            }

            return {
              id: item.id,
              title: name, // Mapeando 'name' do Strapi para 'title' do Card
              subtitle: stockInfo,
              description: finalDesc,
              image: fullImageUrl
            };
          });
          setProdutosEstoque(formattedProducts);
        }
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="produtos">
      {/* Seção 1: Produtos Fixos (Catálogo Original) */}
      <h1 className="produtos-title">Catálogo de Produtos</h1>

      <div className="cards-grid">
        {produtosFixos.map((produto) => (
          <Card
            card={{ ...produto, subtitle: "Disponível a pronta entrega" }}
            key={produto.id}
            showButton={false}
            onImageClick={handleImageClick}
          />
        ))}
      </div>

      <div className="separator" style={{ margin: "40px 0", borderTop: "1px solid #444" }}></div>

      {/* Seção 2: Estoque (Vindo do Strapi) */}
      <h1 className="produtos-title">Estoque (Novidades)</h1>

      {loading ? (
        <p style={{ textAlign: "center" }}>Carregando estoque...</p>
      ) : (
        <>
          <div className="cards-grid">
            {produtosEstoque.map((produto) => (
              <Card
                card={produto}
                key={produto.id}
                showButton={false}
                onImageClick={handleImageClick}
              />
            ))}
          </div>

          {produtosEstoque.length === 0 && (
            <p style={{ textAlign: "center" }}>Nenhum item extra no estoque no momento.</p>
          )}
        </>
      )}

      {/* Modal de Zoom da Imagem */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            cursor: 'pointer'
          }}
          onClick={closeImageModal}
        >
          <img
            src={selectedImage}
            alt="Zoom do produto"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '8px',
              boxShadow: '0 0 20px rgba(0,0,0,0.5)'
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Produtos;
