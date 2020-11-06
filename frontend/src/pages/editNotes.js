import React, { useState, useEffect } from "react";
import { FiSave } from "react-icons/fi";
import { useHistory, useParams } from "react-router-dom";
//Engine
import api from "../services/api";
//Components
import Header from "../components/Header";
import Nav from "../components/Nav";

function EditNotes() {
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");

  async function handleEditNote(e) {
    e.preventDefault();
    const data = { title, message };

    const request = await api.put(`/notes/${id}`, data);
    alert(request.data.message);
    return history.push("/");
  }

  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    api
      .get(`/notes/${id}`)
      .then((response) => {
        const { data } = response;
        setMessage(data.data.message);
        setTitle(data.data.name);
      })
      .catch((error) => {
        history.push("/");
        alert(error);
      });
  }, [id]);

  return (
    <div className="App">
      <Header />
      <section className="App-container">
        <Nav />

        <section className="App-listnotes">
          <h3>Nova Nota</h3>
          <form onSubmit={handleEditNote}>
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

export default EditNotes;
