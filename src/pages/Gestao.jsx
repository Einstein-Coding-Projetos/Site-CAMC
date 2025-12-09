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

const MembroCard = ({ nome, cargo, fotoUrl }) => (
  <div className="membro-card">
    <img src={fotoUrl} alt={`Foto de ${nome}`} />
    <h3>{nome}</h3>
    <p>{cargo}</p>
  </div>
);

function Gestao() {
  const gestaoAtual = [
    { nome: "Enzo Soldatelli", cargo: "Presidente", fotoUrl: fotoEnzo },
    { nome: "Daniel Karp", cargo: "Vice-Presidente", fotoUrl: fotoDaniel },
    { nome: "Júlia Schahin", cargo: "Diretora de Produtos", fotoUrl: fotoJulia },
    { nome: "Isabella Porro", cargo: "Diretora de Marketing", fotoUrl: fotoPorro },
  ];

  const gestaoPassada1 = [
    { nome: "Fellipe Godoy", cargo: "Presidente", fotoUrl: fotoGodoy },
    { nome: "Helena Duarte", cargo: "Vice-Presidente", fotoUrl: fotoHelena },
    { nome: "Felipe Martins", cargo: "Diretor de Eventos", fotoUrl: fotoMartins },
    { nome: "Marina Bloj", cargo: "Diretora de Eventos", fotoUrl: fotoMari },
    { nome: "Manuela Somoza", cargo: "Diretora de Marketing", fotoUrl: fotoManu },
  ];

  const gestaoPassada2 = [
    { nome: "Giulia Mello", cargo: "Presidente", fotoUrl: fotoGiulia },
    { nome: "Gabriella Froehlich", cargo: "Vice-Presidente", fotoUrl: fotoGabi },
    { nome: "Emily Braun", cargo: "Diretora de Eventos", fotoUrl: fotoEmily },
    { nome: "Tiago Moscal", cargo: "Diretor de Marketing", fotoUrl: fotoMoscal },
    { nome: "Maria Gabriela Nabhan", cargo: "Diretora de Produtos", fotoUrl: fotoBita },
  ];

  const secoesGestao = [
    { titulo: "Gestão Atual (2026)", membros: gestaoAtual },
    { titulo: "Gestão 2025", membros: gestaoPassada1 },
    { titulo: "Gestão 2023-2024", membros: gestaoPassada2 },
  ];

  return (
    <div className="gestao">
      <h1 className="gestao-title">Gestão do Centro Acadêmico</h1>

      {secoesGestao.map((secao) => (
        <section key={secao.titulo} className="gestao-section">
          <h2>{secao.titulo}</h2>
          <div className="membros-grid">
            {secao.membros.map((membro, index) => (
              <MembroCard
                key={`${secao.titulo}-${index}`}
                {...membro}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Gestao;
