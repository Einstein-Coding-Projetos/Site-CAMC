import "../css/Home.css";
import MarieCurieImg from "../assets/Marie-Curie-Sticker.jpg";

function Home() {
  return (
    <main className="home-page">
      {/* ================= HERO ================= */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">Centro Acadêmico Marie Curie</h1>
          <p className="hero-subtitle">Engenharia Biomédica Einstein</p>

          <a href="/eventos" className="hero-btn">
            Ver eventos
          </a>
        </div>
      </section>

      {/* ================= SOBRE ================= */}
      <section className="section section-camc">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">Sobre</span>
            <h2 className="section-title">O que é o CAMC?</h2>
          </div>

          <div className="camc-content">
            <p>
              O Centro Acadêmico Marie Curie (CAMC) é a entidade de
              representação estudantil do curso de Engenharia Biomédica. Atuamos
              como ponte entre o corpo discente, a coordenação e o mercado de
              trabalho.
            </p>

            <ul className="camc-list">
              <li>
                <strong>Missão:</strong> {""}
                Promover a integração acadêmica, científica e profissional dos
                estudantes incentivando o pensamento crítico, a inovação e o
                compromisso social, inspirados pelo legado de Marie Curie e pela
                aplicação do conhecimento científico em benefício da saúde
              </li>
              <li>
                <strong>Valores:</strong> ...
              </li>
              <li>
                <strong>Foco:</strong> {""}
                Atuar no fortalecimento da formação acadêmica na área da saúde e
                da engenharia, estimulando a interdisciplinaridade, a pesquisa
                científica, a inovação tecnológica e o impacto positivo na
                saúde.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= MARIE CURIE ================= */}
      <section className="section section-curie">
        <div className="section-container curie-grid">
          <div className="curie-text">
            <span className="section-eyebrow">Inspiração</span>
            <h2 className="section-title">Marie Curie</h2>

            <p>
              Marie Skłodowska-Curie foi uma cientista pioneira, reconhecida por
              sua dedicação à pesquisa e por romper barreiras na ciência.
            </p>
            <p>
              Seu legado inspira o CAMC a promover conhecimento, equidade e
              inovação.
            </p>
          </div>

          <img src={MarieCurieImg} alt="Marie Curie" className="curie-image" />
        </div>
      </section>
    </main>
  );
}

export default Home;
