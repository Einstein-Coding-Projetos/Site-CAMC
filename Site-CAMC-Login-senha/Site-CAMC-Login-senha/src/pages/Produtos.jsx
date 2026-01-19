import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../css/Produtos.css";
import { getProducts, API_URL } from "../services/api";

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        if (data && data.data) {
          const formattedProducts = data.data.map(item => {
            // Strapi v5 flat structure: attributes are at root
            const { name, description, price, images } = item;

            // Image handling (Strapi v5 with populate=* returns images as array or object directly)
            let imageUrl = null;
            if (images && Array.isArray(images) && images.length > 0) {
              imageUrl = images[0].url;
            } else if (images && images.url) {
              imageUrl = images.url;
            }

            const fullImageUrl = imageUrl ? `${API_URL}${imageUrl}` : null;

            // Description handling
            let descText = "Sem descrição";
            if (typeof description === 'string') {
              descText = description;
            } else if (Array.isArray(description) && description.length > 0) {
              // simple block handling
              descText = description[0]?.children?.[0]?.text || "Sem descrição";
            }

            // Stock handling
            const stock = item.stock;

            return {
              id: item.id,
              title: name,
              release_date: `R$ ${price ? price.toFixed(2) : "0.00"}`,
              description: descText,
              stock: stock,
              image: fullImageUrl
            };
          });
          setProdutos(formattedProducts);
        }
      } catch (error) {
        console.error("Failed to load products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="loading">Carregando produtos...</div>;
  }

  return (
    <div className="produtos">
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
