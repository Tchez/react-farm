import React from "react";
import axios from "axios";

export default function Jogador(props) {
  const deleteJogador = (jogadorId) => {
    axios
      .delete(`http://localhost:8000/jogadores/${jogadorId}`)
      .then((resposta) => {
        alert("Jogador removido com sucesso " + resposta.data);
      });
  };
  const editJogador = (jogador) => {
    props.setJogadorId(jogador.id);
    props.setJogadorNome(jogador.nome);
    props.setJogadorIdade(jogador.idade);
    props.setJogadorTime(jogador.time);
  };

  return (
    <div>
      <p>
        <span className="fw-bold">
          {props.jogador.nome} - {props.jogador.idade} - {props.jogador.time}
        </span>
        <button
          onClick={() => editJogador(props.jogador)}
          className="btn btn-sm"
        >
          <span className="badge rounded-pill bg-info">Editar</span>
        </button>

        <button
          onClick={() => deleteJogador(props.jogador.id)}
          className="btn btn-sm"
        >
          <span className="badge rounded-pill bg-danger">X</span>
        </button>
      </p>
    </div>
  );
}
