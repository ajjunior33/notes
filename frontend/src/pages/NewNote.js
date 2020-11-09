import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Nav from "../components/Nav";

import "../styles/pages/Dashboard.css";

function NewNote() {
  return (
    <>
      <Header />
      <div id="dashboard">
        <section id="container-dashboard">
          <Nav />

          <section>
            <div className="form-group">
              <label htmlFor="title">Titulo</label>
              <input type="text" id="title" placeholder="Seu titulo aqui. "
              className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                type="text"
                id="message"
                className="form-control"
                placeholder="Mensagem em markdown!"
              ></textarea>
            </div>
            <div className="button button_success">Enviar</div>
          </section>
        </section>
        <footer>
          <span>&copy; Todos os direitos reservados - 2020</span>
        </footer>
      </div>
    </>
  );
}

export default NewNote;
