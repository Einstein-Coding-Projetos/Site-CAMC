import { useMemo, useState } from "react";
import "../css/EventosCarrosel.css";

import foto1SAEBE1 from "../assets/foto1SAEBE1.png";
import foto2SAEBE1 from "../assets/foto2SAEBE1.png";
import foto3SAEBE1 from "../assets/foto3SAEBE1.png";

import foto1SAEBE2 from "../assets/foto1SAEBE2.png";
import foto2SAEBE2 from "../assets/foto2SAEBE2.png";
import foto3SAEBE2 from "../assets/foto3SAEBE2.png";

import foto2FOOD1 from "../assets/foto2FOOD1.png";

import foto1GIRLS1 from "../assets/foto1GIRLS1.png";
import foto2GIRLS1 from "../assets/foto2GIRLS1.png";

import foto1FOOD2 from "../assets/foto1FOOD2.png";
import foto2FOOD2 from "../assets/foto2FOOD2.png";

import foto1RODA from "../assets/foto1RODA.png";
import foto2RODA from "../assets/foto2RODA.png";
import foto3RODA from "../assets/foto3RODA.png";
import foto4RODA from "../assets/foto4RODA.png";

import foto1GIRLS2 from "../assets/foto1GIRLS2.png";
import foto2GIRLS2 from "../assets/foto2GIRLS2.png";
import foto3GIRLS2 from "../assets/foto3GIRLS2.png";

import foto1BIOSPARKS from "../assets/foto1BIOSPARKS.png";
import foto2BIOSPARKS from "../assets/foto2BIOSPARKS.png";

export default function EventosCarrosel() {
  const eventos = useMemo(
    () => [
      {
        id: 1,
        titulo: "SAEBE - Simpósio da Engenharia Biomédica Einstein",
        data: "2024",
        descricao:
          "Um dia dedicado a palestras e workshops, promovendo a troca de conhecimento, inovação e integração entre estudantes e profissionais da engenharia biomédica.",
        imagens: [foto1SAEBE1, foto2SAEBE1, foto3SAEBE1],
      },
      {
        id: 2,
        titulo: "FOOD & SCIENCE",
        data: "2024",
        descricao:
          "Um encontro descontraído entre professores e alunos, com compartilhamento de experiências sobre graduação, mestrado e doutorado, acompanhado de comida e boas conversas.",
        imagens: [foto2FOOD1],
      },
      {
        id: 3,
        titulo: "GIRLS IN STEM",
        data: "2024",
        descricao:
          "Atividade voltada à valorização das contribuições femininas na ciência, com a produção de cartazes sobre descobertas e trajetórias.",
        imagens: [foto2GIRLS1, foto1GIRLS1],
      },
      {
        id: 4,
        titulo: "2º FOOD&SCIENCE",
        data: "2024",
        descricao:
          "Edição com participação de Marta Puerto, do time de inovação do Einstein, e da startup Biologix, promovendo uma conversa sobre inovação, empreendedorismo e ciência.",
        imagens: [foto1FOOD2, foto2FOOD2],
      },
      {
        id: 5,
        titulo: "Roda de Conversa - Mulheres na Engenharia",
        data: "2024",
        descricao:
          "Momento de diálogo e troca de experiências sobre desafios, trajetórias e vivências de mulheres na engenharia, guiado pelas professoras Dra. Paula Antunes e Dra. Maria Isabel Orselli.",
        imagens: [foto1RODA, foto2RODA, foto3RODA, foto4RODA],
      },
      {
        id: 6,
        titulo: "Dia das Mulheres",
        data: "2025",
        descricao:
          "Encontro com representantes da Amazon, da diretoria do Hospital Israelita Albert Einstein e da indústria farmacêutica, promovendo diálogo sobre liderança, carreira e impacto.",
        imagens: [foto1GIRLS2, foto2GIRLS2, foto3GIRLS2],
      },
      {
        id: 7,
        titulo: "BIOSPARKS",
        data: "2025",
        descricao:
          "Desafio de inovação com brainstorming de soluções, apresentações e avaliação por banca.",
        imagens: [foto1BIOSPARKS, foto2BIOSPARKS],
      },
      {
        id: 8,
        titulo: "2º SAEBE",
        data: "2025",
        descricao:
          "Um dia intenso de palestras e workshops, conectando estudantes à prática e à inovação em engenharia biomédica.",
        imagens: [foto1SAEBE2, foto2SAEBE2, foto3SAEBE2],
      },
    ],
    []
  );

  // ===== Carrossel externo (eventos) =====
  const [idxEvento, setIdxEvento] = useState(0);
  const prevEvento = () =>
    setIdxEvento((i) => (i - 1 + eventos.length) % eventos.length);
  const nextEvento = () => setIdxEvento((i) => (i + 1) % eventos.length);

  const atual = eventos[idxEvento];

  // ===== Carrossel interno (fotos) =====
  // guarda o índice da foto por evento (pra cada evento lembrar sua última foto)
  const [fotoIdxPorEvento, setFotoIdxPorEvento] = useState(() => {
    const init = {};
    for (const ev of eventos) init[ev.id] = 0;
    return init;
  });

  const fotoAtualIdx = fotoIdxPorEvento[atual.id] ?? 0;
  const totalFotos = atual.imagens.length;

  const setFotoIdx = (novoIdx) => {
    setFotoIdxPorEvento((prev) => ({ ...prev, [atual.id]: novoIdx }));
  };

  const prevFoto = () =>
    setFotoIdx((fotoAtualIdx - 1 + totalFotos) % totalFotos);
  const nextFoto = () => setFotoIdx((fotoAtualIdx + 1) % totalFotos);

  return (
    <section className="eventosCarrosel">
      <div className="carousel">
        {/* seta do carrossel EXTERNO */}
        <button
          className="navBtn"
          onClick={prevEvento}
          aria-label="Evento anterior"
          type="button"
        >
          ‹
        </button>

        <article className="card">
          <header className="cardHeader">
            <h2 className="cardTitle">{atual.titulo}</h2>
            <p className="cardDate">Data: {atual.data}</p>
          </header>

          {/* ===== carrossel INTERNO (3 fotos) ===== */}
          <div className="cardImageWrap innerCarousel">
            <img
              className="cardImage"
              src={atual.imagens[fotoAtualIdx]}
              alt={`${atual.titulo} - foto ${fotoAtualIdx + 1}`}
            />

            <button
              className="innerBtn innerPrev"
              onClick={prevFoto}
              type="button"
              aria-label="Foto anterior"
            >
              ‹
            </button>

            <button
              className="innerBtn innerNext"
              onClick={nextFoto}
              type="button"
              aria-label="Próxima foto"
            >
              ›
            </button>

            <div className="innerDots" aria-label="Fotos do evento">
              {atual.imagens.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`innerDot ${i === fotoAtualIdx ? "active" : ""}`}
                  onClick={() => setFotoIdx(i)}
                  aria-label={`Ir para foto ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <p className="cardDesc">{atual.descricao}</p>

          {/* dots do carrossel EXTERNO */}
          <div className="dots" aria-label="Indicador de eventos">
            {eventos.map((ev, i) => (
              <button
                key={ev.id}
                type="button"
                className={`dot ${i === idxEvento ? "active" : ""}`}
                onClick={() => setIdxEvento(i)}
                aria-label={`Ir para ${ev.titulo}`}
              />
            ))}
          </div>
        </article>

        {/* seta do carrossel EXTERNO */}
        <button
          className="navBtn"
          onClick={nextEvento}
          aria-label="Próximo evento"
          type="button"
        >
          ›
        </button>
      </div>
    </section>
  );
}
