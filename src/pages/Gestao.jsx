// src/pages/Gestao.jsx

import React from "react";
import "../css/Gestao.css";

// Componente auxiliar para exibir um único membro
const MembroCard = ({ nome, cargo, fotoUrl }) => (
  <div className="membro-card">
        {/* Usa a variável de importação que contém o caminho correto */}   {" "}
    <img
      src={fotoUrl} // Agora fotoUrl é a variável, não a string literal
      alt={`Foto de ${nome}`}
    />
        <h3>{nome}</h3>    <p>{cargo}</p> {" "}
  </div>
);

function Gestao() {
  // Dados da Gestão Atual (2025)
  const gestaoAtual = [
    {
      nome: "Fellipe Godoy",
      cargo: "Presidente",
      // fotoUrl: fotoGodoy,
    },
    {
      nome: "Helena Duarte",
      cargo: "Vice-Presidente",
      // fotoUrl: fotoHelena, // CORRIGIDO: Usando a variável importada
    },
    {
      nome: "Sabrina Souza",
      cargo: "Diretora Financeiro",
      //fotoUrl: fotoSabrina, // CORRIGIDO: Usando a variável importada
    },
    {
      nome: "Felipe Martins",
      cargo: "Diretor de Eventos",
      //fotoUrl: fotoMartins, // CORRIGIDO: Usando a variável importada
    },
  ]; // Dados da Gestão Passada (Ex: 2024)

  const gestaoPassada = [
    {
      nome: "Giulia Mello",
      cargo: "Presidente",
      //   fotoUrl: fotoGiulia, // CORRIGIDO: Usando a variável importada
    },
    {
      nome: "Gabriella Froehlich",
      cargo: "Vice-Presidente",
      //  fotoUrl: fotoGabriella, // CORRIGIDO: Usando a variável importada
    },
    {
      nome: "Emily Braun",
      cargo: "Diretora de Eventos",
      //  fotoUrl: fotoEmily, // CORRIGIDO: Usando a variável importada
    },
  ];

  return (
    <div className="gestao">
            <h1 className="gestao-title">Gestão do Centro Acadêmico</h1>     {" "}
      {/* Seção da Gestão Atual */}     {" "}
      <div className="gestao-section">
                <h2>Gestão Atual (2025)</h2>       {" "}
        <div className="membros-grid">
                   {" "}
          {gestaoAtual.map((membro, index) => (
            <MembroCard key={index} {...membro} />
          ))}
                 {" "}
        </div>
             {" "}
      </div>
            {/* Seção da Gestão Passada */}     {" "}
      <div className="gestao-section">
                <h2>Gestão Passada ({new Date().getFullYear() - 1})</h2>       {" "}
        <div className="membros-grid">
                   {" "}
          {gestaoPassada.map((membro, index) => (
            <MembroCard key={index} {...membro} />
          ))}
                 {" "}
        </div>
             {" "}
      </div>
         {" "}
    </div>
  );
}

export default Gestao;
