// src/pages/Eventos.jsx

import Card from "../components/Card";
import "../css/Eventos.css"; // Lembrete: este CSS ainda precisa ser criado!

function Eventos() {
  // Dados de teste com os eventos do seu Site CA
  const cards = [
    {
      id: 1,
      title: "SAEBE",
      release_date: "2024",
      description: "Semana Acadêmica de Engenharia e Biotecnologia.",
    },
    {
      id: 2,
      title: "FOOD & SCIENCE",
      release_date: "2024",
      description: "Feira de alimentos e inovações científicas.",
    },
    {
      id: 3,
      title: "DIA DAS MULHERES",
      release_date: "2024",
      description: "Comemoração especial com palestras e workshops.",
    },
  ];

  return (
    <div className="eventos container">
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Próximos Eventos do Site CA
      </h1>

      {/* Grade onde os cards dos eventos serão exibidos */}
      <div className="cards-grid">
        {cards.map((card) => (
          // Usando o componente Card para exibir cada evento
          <Card card={card} key={card.id} />
        ))}
      </div>

      {/* Se a lista estiver vazia, podemos mostrar uma mensagem */}
      {cards.length === 0 && (
        <p style={{ textAlign: "center" }}>
          Não há eventos agendados no momento.
        </p>
      )}
    </div>
  );
}

export default Eventos;
