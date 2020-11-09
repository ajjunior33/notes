import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Nav.css";
import {
  RiLogoutBoxLine,
  RiAddCircleLine,
  RiFileList3Line,
} from "react-icons/ri";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">
            <RiFileList3Line />
            Lista
          </Link>
        </li>
        <li>
          <Link to="/new_note">
            <RiAddCircleLine />
            Nova Nota
          </Link>
        </li>
        <li className="logout">
          <Link to="/logout">
            <RiLogoutBoxLine />
            Sair
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
