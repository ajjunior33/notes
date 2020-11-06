import React, { useState } from "react";
import { FiSave } from "react-icons/fi";
import { useHistory } from "react-router-dom";
//Engine
import api from "../services/api";
//Components
import Header from "../components/Header";
import Nav from "../components/Nav";

function NewNotes() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  async function handleNewNote(event) {
    event.preventDefault();
    const newNote = { title, message };
    await api.post("/notes", newNote);
    alert(`Nota Criada com sucesso !`);

    return history.push("/");
  }
  return (
    <div className="App">
      <Header />
      <section className="App-container">
        <Nav />

        <section className="App-listnotes">
          <h3>Nova Nota</h3>
          <form onSubmit={handleNewNote}>
            <div className="form-group">
              <label htmlFor="title">Titulo da Nota </label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(response) => setTitle(response.target.value)}
                id="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Sua nota </label>
              <textarea
                type="text"
                className="form-control"
                value={message}
                onChange={(response) => setMessage(response.target.value)}
                id="message"
                placeholder="Sua mensagem aqui em Markdown"
              />
            </div>

            <button className="button button_save">
              <FiSave />
              Salvar
            </button>
          </form>
        </section>
      </section>

      <footer>
        <center>
          &copy; <strong>White Code Notes</strong> - 2020
        </center>
      </footer>
    </div>
  );
}

export default NewNotes;
