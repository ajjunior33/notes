import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ListNotes from "./pages/listNotes";
import newNote from "./pages/newNote";
import Login from "./pages/Login";
import Edit from "./pages/editNotes";

export default function Routes() {
  const [loguer, setLoguer] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    console.log(token);
    if (!token) {
      setLoguer(false);
    } else {
      setLoguer(true);
    }
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        {loguer !== false ? (
          <Route path="/" component={ListNotes} exact />
        ) : (
          <Route path="/" component={Login} exact />
        )}
        <Route path="/new" component={newNote} exact />
        <Route path="/edit/:id" component={Edit} exact />
      </Switch>
    </BrowserRouter>
  );
}
