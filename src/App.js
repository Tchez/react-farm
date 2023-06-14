function App() {
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
              className="form-control mb-2"
              type="text"
              placeholder="Informe o Nome"
            />
            <input
              className="form-control mb-2"
              type="text"
              placeholder="Informe a Idade"
            />
            <input
              className="form-control mb-2"
              type="text"
              placeholder="Informe o Time"
            />
            <button className="btn btn-outline-success mb-4">Cadastrar</button>
          </span>
          <h5 className="card text-center text-white bg-dark pb-1 mb-4">
            Lista de jogadores
          </h5>
          <div></div>
        </div>
        <h6 className="card text-center text-light bg-success py-1">
          &copy; CodeTI - 2023
        </h6>
      </div>
    </div>
  );
}

export default App;
