import EventosCarrosel from "../components/EventosCarrosel";
import "../css/Eventos.css";

export default function Eventos() {
  return (
    <main className="eventos">
      <div className="eventos-container">
        <h1 className="eventos-title">Eventos do Centro Acadêmico Marie Curie</h1>

        <div className="eventos-content">
          <EventosCarrosel />
        </div>
      </div>
    </main>
  );
}
