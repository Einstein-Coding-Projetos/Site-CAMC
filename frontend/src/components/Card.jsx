// src/components/Card.jsx

import "../css/Card.css";

// O componente agora recebe 'data' para ser mais genérico
// e ele precisa receber a 'description' dos seus eventos.
// O componente agora recebe 'showButton' para controlar o botão
// O componente agora recebe 'showButton' para controlar o botão
function Card({ card, showButton = true, onImageClick, onClick }) {
  return (
    <div
      className="card"
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {/* Imagem do card se existir */}
      {card.image && (
        <img
          src={card.image}
          alt={card.title}
          className="card-image"
          onClick={(e) => {
            if (showButton === false && onImageClick) {
              e.stopPropagation(); // Prevent card onClick if clicking specifically the image
              onImageClick(card.image);
            }
          }}
          style={{ cursor: showButton === false && onImageClick ? 'zoom-in' : 'inherit' }}
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
