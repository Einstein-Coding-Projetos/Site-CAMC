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

      <div className="card-info">
        {/* Usando card.title do seu Eventos.jsx */}
        <h3>{card.title}</h3>

        {/* Usando card.release_date que você definiu nos seus eventos,
           e não card.date, que não existe na sua lista.
        */}
        <p>Data: {card.release_date}</p>

        {/* Se existir uma descrição, exibe ela */}
        {card.description && <p>{card.description}</p>}
      </div>

      {/* Botão de ação opcional para mais detalhes */}
      <button className="details-btn">Ver Detalhes</button>
    </div>
  );
}

export default Card;
