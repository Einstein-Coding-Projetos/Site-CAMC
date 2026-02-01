import "../css/Home.css";

// CORREÇÃO: Comentando a importação da imagem que está faltando.
// import HeroImage from '../assets/hero-bg.jpg';

function Home() {
  // Definimos uma variável nula para não quebrar o código nas tags <img>
  const HeroImage = null;

  return (
    <div className="home-page">
      {/* 1. SEÇÃO HERO / INTRODUÇÃO */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Centro Acadêmico Marie Curie</h1>
          <p className="hero-subtitle">Engenharia Biomédica Einstein</p>
          <a href="/eventos" className="hero-btn">
            VER EVENTOS
          </a>
        </div>
      </section>

      {/* 2. SEÇÃO O QUE É O CAMC? (Missão) */}
      <section className="section-camc scroll-reveal">
        <h2 className="section-title">O Que É o CAMC?</h2>
        <div className="camc-content">
          <p>
            O Centro Acadêmico Marie Curie (CAMC) é a entidade de representação
            estudantil do curso de Engenharia Biomédica. Nossa missão é ser a
            ponte entre o corpo discente, a coordenação e o mercado de trabalho.
          </p>
          <ul>
            <li>**Missão:** ...</li>
            <li>**Valores:** ...</li>
            <li>**Foco:** ...</li>
          </ul>
        </div>
      </section>

      {/* 3. SEÇÃO MARIE CURIE */}
      <section className="section-curie scroll-reveal">
        <h2 className="section-title curie-title">
          Nossa Inspiração: Marie Curie
        </h2>
        <div className="curie-content">
          {/* O src está usando a variável nula. Adicione uma imagem real aqui quando tiver! */}
          <img
            src={HeroImage || "https://via.placeholder.com/350x350"}
            alt="Marie Curie"
            className="curie-image"
          />
          <div className="curie-text">
            <p>Marie Skłodowska-Curie, ...</p>
            <p>
              Seu legado de dedicação à ciência e quebra de barreiras inspira o
              CAMC ...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
