// src/components/Card.jsx

import "../css/Card.css";

// O componente agora recebe 'data' para ser mais genérico
// e ele precisa receber a 'description' dos seus eventos.
function Card({ card }) {
  return (
    <div className="card">
      {/* REMOVIDA a tag <img> que estava causando o erro, 
        pois ela usava a variável 'movie' e esperava a propriedade 'url' (que você não tem).
      */}

      {/* Exibe a imagem se existir */}
      {card.image && (
        <img src={card.image} alt={card.title} className="card-image" />
      )}

      <div className="card-info">
        <h3>{card.title}</h3>
        <p>{card.release_date}</p>

        {/* Se existir uma descrição, exibe ela */}
        {card.description && <p>{card.description}</p>}

        {/* Exibe o estoque se existir (apenas para produtos) */}
        {card.stock !== undefined && (
          <p className="card-stock">
            {card.stock > 0 ? `Estoque: ${card.stock} un.` : "Produto Indisponível"}
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
