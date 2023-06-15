import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import JogadorList from "./components/JogadorList";

function App() {
  const [jogadorList, setJogadorList] = useState([]);
  const [jogadorNome, setJogadorNome] = useState("");
  const [jogadorIdade, setJogadorIdade] = useState("");
  const [jogadorTime, setJogadorTime] = useState("");
  const [jogadorId, setJogadorId] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/jogadores")
      .then((response) => {
        setJogadorList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addJogador = (jogador) => {
    axios
      .post("http://localhost:8000/jogadores", jogador)
      .then((response) => {
        alert("Jogador cadastrado com sucesso!" + response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addUpdateJogador = () => {
    const jogador = {
      nome: jogadorNome,
      idade: jogadorIdade,
      time: jogadorTime,
    };

    if (jogadorId != "") {
      updateJogador(jogador);
    } else {
      addJogador(jogador);
    }
  };

  const updateJogador = (jogador) => {
    axios
      .put(`http://localhost:8000/jogadores/${jogadorId}`, jogador)
      .then((response) => {
        alert("Jogador atualizado com sucesso!" + response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div
        className="mt-3 justify-content-center align-items-center mx-auto"
        style={{ width: "60vw", backgroundColor: "#fff" }}
      >
        <h2 className="card text-center text-white bg-success mb-1">
          Gerenciamento de jogadores
        </h2>
        <h6 className="card text-center text-white bg-success mb-2 pb-1">
          Informações de jogador
        </h6>
        <div className="card-body text-center">
          <h5 className="card text-center text-white bg-dark mb-2 pb-1">
            Cadastro do jogador
          </h5>
          <span className="card-text">
            <input
              onChange={(event) => setJogadorNome(event.target.value)}
              value={jogadorNome}
              className="form-control mb-2"
              type="text"
              placeholder="Informe o Nome"
            />
            <input
              onChange={(event) => setJogadorIdade(event.target.value)}
              value={jogadorIdade}
              className="form-control mb-2"
              type="text"
              placeholder="Informe a Idade"
            />
            <input
              onChange={(event) => setJogadorTime(event.target.value)}
              value={jogadorTime}
              className="form-control mb-2"
              type="text"
              placeholder="Informe o Time"
            />
            <button
              onClick={addUpdateJogador}
              className="btn btn-outline-success mb-4"
            >
              {jogadorId != "" ? "Atualizar" : "Cadastrar"}
            </button>
          </span>
          <h5 className="card text-center text-white bg-dark pb-1 mb-4">
            Lista de jogadores
          </h5>
          <div>
            <JogadorList
              jogadorList={jogadorList}
              setJogadorId={setJogadorId}
              setJogadorNome={setJogadorNome}
              setJogadorIdade={setJogadorIdade}
              setJogadorTime={setJogadorTime}
            />
          </div>
        </div>
        <h6 className="card text-center text-light bg-success py-1">
          &copy; CodeTI - 2023
        </h6>
      </div>
    </div>
  );
}

export default App;
