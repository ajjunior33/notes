import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function VerifyAuth() {
  const history = useHistory();
  useEffect(() => {
    handleToken();
  }, []);
  function handleToken() {
    const token = localStorage.getItem("token");
    if (token) {
      console.log(token);
      history.push("/dashboard");
    } else {
      history.push("/");
    }
  }
  return <h1>Hello,world!</h1>;
}
export default VerifyAuth;
