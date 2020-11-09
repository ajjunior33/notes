import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import VerifyAuth from "./pages/VerifyAuth";
import Dashboard from "./pages/Dashboard";
import NewNote from "./pages/NewNote";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/verify" component={VerifyAuth} exact />
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/new_note" component={NewNote} exact />
      </Switch>
    </BrowserRouter>
  );
}
