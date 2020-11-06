import React from "react";
import { useHistory } from "react-router-dom";

function Nav() {
  const history = useHistory();
  function handleNewNote() {
    history.push("/new");
  }
  return (
    <nav>
      <button className="button button_classic" onClick={handleNewNote}>
        Nova nota
      </button>

      <ul>
        <a href="/">
          <li>Lista de Nota</li>
        </a>
      </ul>
    </nav>
  );
}
export default Nav;
