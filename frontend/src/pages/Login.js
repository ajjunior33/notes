import React, { useState } from "react";

import axios from "axios";

import "../style/pages/Login.css";

function Login() {
  const [login, setLogin] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const auth = await axios.post(
      "http://localhost:3333/users/auth",
      {},
      {
        headers: {
          token: login,
        },
      }
    );
    const { data } = auth;
    if (data.status === true) {
      localStorage.setItem("token", data.cod_access);
    }
  }
  return (
    <div className="App">
      <form className="loginbox" onSubmit={handleLogin}>
        <h1 className="text-white text-center">Acesse suas notas</h1>
        <div className="form-group">
          <label htmlFor="title">Usuário </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="2312-sad"
            value={login}
            onChange={(r) => setLogin(r.target.value)}
          />
        </div>

        <button type="submit" className="button button_classic">
          Acessar minha conta
        </button>
      </form>
    </div>
  );
}

export default Login;
