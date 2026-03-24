// src/pages/Gestao.jsx
import React from "react";
import "../css/Gestao.css";

import fotoBita from "../assets/bita.png";
import fotoDaniel from "../assets/daniel.png";
import fotoEmily from "../assets/emily.png";
import fotoGabi from "../assets/gabi.png";
import fotoGiulia from "../assets/giulia.png";
import fotoGodoy from "../assets/godoy.png";
import fotoHelena from "../assets/helena.png";
import fotoJulia from "../assets/julia.png";
import fotoMari from "../assets/mari.png";
import fotoMartins from "../assets/martins.png";
import fotoManu from "../assets/manu.png";
import fotoMoscal from "../assets/moscal.png";
import fotoPorro from "../assets/porro.png";
import fotoEnzo from "../assets/enzo.png";

function MembroCard({ nome, cargo, fotoUrl }) {
  return (
    <article className="membro-card">
      <div className="membro-fotoWrap">
        <img className="membro-foto" src={fotoUrl} alt={`Foto de ${nome}`} />
      </div>

      <h3 className="membro-nome">{nome}</h3>
      <p className="membro-cargo">{cargo}</p>
    </article>
  );
}

export default function Gestao() {
  const gestaoAtual = [
    { nome: "Enzo Soldatelli", cargo: "Presidente", fotoUrl: fotoEnzo },
    { nome: "Daniel Karp", cargo: "Vice-Presidente", fotoUrl: fotoDaniel },
    { nome: "Júlia Schahin", cargo: "Diretora de Produtos", fotoUrl: fotoJulia },
    { nome: "Isabella Porro", cargo: "Diretora de Marketing", fotoUrl: fotoPorro },
  ];

  const gestao2025 = [
    { nome: "Fellipe Godoy", cargo: "Presidente", fotoUrl: fotoGodoy },
    { nome: "Helena Duarte", cargo: "Vice-Presidente", fotoUrl: fotoHelena },
    { nome: "Felipe Martins", cargo: "Diretor de Eventos", fotoUrl: fotoMartins },
    { nome: "Marina Bloj", cargo: "Diretora de Eventos", fotoUrl: fotoMari },
    { nome: "Manuela Somoza", cargo: "Diretora de Marketing", fotoUrl: fotoManu },
  ];

  const gestao2324 = [
    { nome: "Giulia Mello", cargo: "Presidente", fotoUrl: fotoGiulia },
    { nome: "Gabriella Froehlich", cargo: "Vice-Presidente", fotoUrl: fotoGabi },
    { nome: "Emily Braun", cargo: "Diretora de Eventos", fotoUrl: fotoEmily },
    { nome: "Tiago Moscal", cargo: "Diretor de Marketing", fotoUrl: fotoMoscal },
    { nome: "Maria Gabriela Nabhan", cargo: "Diretora de Produtos", fotoUrl: fotoBita },
  ];

  const secoesGestao = [
    { titulo: "Gestão Atual (2026)", membros: gestaoAtual },
    { titulo: "Gestão 2025", membros: gestao2025 },
    { titulo: "Gestão 2023-2024", membros: gestao2324 },
  ];

  return (
    <main className="gestao">
      <header className="gestao-header">
        <h1 className="gestao-title">Gestões do Centro Acadêmico</h1>
      </header>

      {secoesGestao.map((secao) => (
        <section key={secao.titulo} className="gestao-section">
          <h2 className="gestao-sectionTitle">{secao.titulo}</h2>

          <div className="membros-grid">
            {secao.membros.map((membro) => (
              <MembroCard key={`${secao.titulo}-${membro.nome}`} {...membro} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
