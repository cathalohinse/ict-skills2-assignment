import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const LoginPage = (props) => {
  const context = useContext(AuthContext);

  const login = () => {
    const username = Math.random().toString(36).substring(7);
    context.authenticate(username, "pass1");
  };

  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  const { from } = props.location.state || { from: { pathname: "/" } };

  return context.isAuthenticated ? (
    <Redirect to={from} />
  ) : (
    <>
      <h2>Login page</h2>
      <p>You must log in to view the protected pages </p>
        <form>
          <label>Username:<input type="text" name="name"/></label>
          <label>Password:<input type="password" name="name"/></label>
        </form>
      <button onClick={login}>Submit</button>
    </>
  );
};

export default LoginPage;
