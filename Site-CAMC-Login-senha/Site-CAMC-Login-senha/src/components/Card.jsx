// src/components/Card.jsx

import "../css/Card.css";

// O componente agora recebe 'data' para ser mais genérico
// e ele precisa receber a 'description' dos seus eventos.
// O componente agora recebe 'showButton' para controlar o botão
function Card({ card, showButton = true, onImageClick }) {
  return (
    <div className="card">
      {/* Imagem do card se existir */}
      {card.image && (
        <img
          src={card.image}
          alt={card.title}
          className="card-image"
          onClick={() => showButton === false && onImageClick ? onImageClick(card.image) : null}
          style={{ cursor: showButton === false && onImageClick ? 'pointer' : 'default' }}
        />
      )}

      <div className="card-info">
        <h3>{card.title}</h3>

        {/* Lógica: Se tiver subtítulo usa ele, senão usa o padrão de Data */}
        {card.subtitle ? (
          <p className="card-subtitle">{card.subtitle}</p>
        ) : (
          <p>Data: {card.release_date}</p>
        )}

        {card.description && <p>{card.description}</p>}
      </div>

      {/* Botão controlado pela prop showButton */}
      {showButton && <button className="details-btn">Ver Detalhes</button>}
    </div>
  );
}

export default Card;
