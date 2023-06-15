import React from "react";
import Jogador from "./Jogador";

export default function JogadorList(props) {
  return (
    <div>
      <ul>
        {props.jogadorList.map((jogador, index) => {
          return (
            <Jogador
              jogador={jogador}
              key={index}
              setJogadorId={props.setJogadorId}
              setJogadorNome={props.setJogadorNome}
              setJogadorIdade={props.setJogadorIdade}
              setJogadorTime={props.setJogadorTime}
            />
          );
        })}
      </ul>
    </div>
  );
}
