import React, { useState, useEffect } from "react";
import { FiPenTool, FiTrash } from "react-icons/fi";
import { useHistory } from "react-router-dom";
//Engine
import api from "../services/api";
import "../style/pages/listNotes.css";
//Components
import ViewText from "../components/ViewText";
import Header from "../components/Header";
import Nav from "../components/Nav";

function ListNotes() {
  const history = useHistory();
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    handleNotes();
  }, []);

  async function handleNotes() {
    const request = await api.get("/notes");
    setNotes(request.data);
  }

  async function deletePost(id) {
    const request = await api.delete(`/notes/${id}`);
    handleNotes();
    alert(request.data.message);
  }

  async function editPost(id) {
    history.push(`/edit/${id}`);
  }

  return (
    <div className="App">
      <Header />
      <section className="App-container">
        <Nav />

        <section className="App-listnotes">
          <h3>Lista de Notas</h3>
          {notes.map((response) => (
            <div className="App-note" key={response._id}>
              <h3>{response.name}</h3>
              <ViewText text={response.message} />

              <footer>
                <button
                  className="button button_error"
                  onClick={() => deletePost(response._id)}
                >
                  <FiTrash size={18} />
                </button>
                <button
                  className="button button_warning"
                  onClick={() => editPost(response._id)}
                >
                  <FiPenTool size={18} />
                </button>
              </footer>
            </div>
          ))}
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

export default ListNotes;
