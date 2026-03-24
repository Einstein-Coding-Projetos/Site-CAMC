import "../css/Home.css";
import MarieCurieImg from "../assets/Marie-Curie-Sticker.jpg";
import camcFechada from "../assets/camc-fechada.png";
import camcAberta from "../assets/camc-aberta.png";

function Home() {
  return (
    <main className="home-page">
      {/* ================= HERO ================= */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">CENTRO ACADÊMICO MARIE CURIE</h1>

          <div className="camc-logo-container">
            <img
              src={camcFechada}
              alt="Logo CAMC fechada"
              className="camc-logo logo-fechada"
            />
            <img
              src={camcAberta}
              alt="Logo CAMC aberta"
              className="camc-logo logo-aberta"
            />
          </div>

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

          {/* ADICIONE A CLASSE AQUI PARA O CSS FUNCIONAR */}
          <p className="camc-intro-text">
            O Centro Acadêmico Marie Curie (CAMC) é a entidade de representação estudantil do curso de Engenharia Biomédica. Nossa missão transcende a representação formal: buscamos atuar como ecossistema de crescimento, promovendo eventos que democratizam o conhecimento e integram o corpo discente à coordenação e às tendências do mercado de trabalho.
          </p>

          {/* Certifique-se de que a lista usa a classe dos cards */}
          <ul className="camc-cards-container">
            <li className="camc-card-item">
              <span className="camc-card-title">Missão</span>
              <p className="camc-card-description">Representar e potencializar a jornada dos estudantes de Engenharia Biomédica, sendo o elo estratégico entre o corpo discente, a coordenação e o mercado.</p>
            </li>
            <li className="camc-card-item">
              <span className="camc-card-title">Valores</span>
              <p className="camc-card-description">Equidade</p>
              <p className="camc-card-description">Transparência </p>
              <p className="camc-card-description">Inovação </p>
              <p className="camc-card-description">Integração</p>
            </li>
            <li className="camc-card-item">
              <span className="camc-card-title">Foco</span>
              <p className="camc-card-description">Contribuir para a formação integral do aluno, promovendo eventos, networking e atualização científica para transformar o aprendizado em impacto real na saúde.</p>
            </li>
          </ul>
        </div>
      </section>
      {/* ================= MARIE CURIE ================= */}
      <section className="section section-curie">
        <div className="section-container curie-grid">
          <div className="curie-text">
            <span className="section-eyebrow">Inspiração</span>
            <h2 className="section-title">Marie Curie</h2>

            <p>
            O Centro Acadêmico Marie Curie fundamenta sua identidade no legado de uma das maiores mentes da ciência, cuja trajetória personifica os pilares de inovação, equidade e promoção do conhecimento. Sua história de resiliência em espaços historicamente restritos inspira a busca contínua por um ambiente acadêmico mais inclusivo, reafirmando que o saber científico deve ser um bem universal, voltado inteiramente ao progresso coletivo e à transformação social.
            </p>
          </div>

          <img src={MarieCurieImg} alt="Marie Curie" className="curie-image" />
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-container">
          <span className="footer-brand"></span>

          <div className="footer-links">
            <a href="mailto:contato@camc.org.br">contato@camc.org.br</a>
            <a
              href="https://instagram.com/camc"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;
