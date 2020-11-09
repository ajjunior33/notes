import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../styles/pages/Login.css";

function Login() {
  const history = useHistory();
  const [usuario, setUsuario] = useState("");
  async function handleLogin(event) {
    event.preventDefault();
    try {
      const auth = await axios.post(
        `${process.env.REACT_APP_API_INTERNAL}/users/auth`,
        {},
        {
          headers: {
            token: usuario,
          },
        }
      );
      const { cod_access } = auth.data;

      localStorage.setItem("token", cod_access);

      history.push("/verify");
    } catch (error) {
      console.log("Error!");
    }
  }
  return (
    <div id="container">
      <div className="content">
        <form onSubmit={handleLogin}>
          <h2 className="text-center">Acessar minha conta</h2>
          <div className="form-group">
            <label htmlFor="">Usuario</label>
            <input
              type="text"
              className="form-control low-opacity"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          <button className="button button_primary button_block">
            Acessar
          </button>
        </form>

        <footer>
          <a href="">Criar uma conta</a>
          <a href="">Esqueci minha senha</a>
        </footer>
      </div>
    </div>
  );
}

export default Login;
