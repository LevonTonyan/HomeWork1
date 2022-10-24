import React from "react";
import "./App.css";
import { Button } from "@mui/material";

const LoginPage = (props) => {
  const userNameRef = React.createRef();
  const passwordRef = React.createRef();

  const userPass = () => {
    props.login({
      user: userNameRef.current.value,
      password: passwordRef.current.value,
    });
    userNameRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="loginContainer">
      <form className="loginForm">
        <input placeholder="username" ref={userNameRef} />
        <input type="password"placeholder="password" ref={passwordRef} />
        <Button
          variant="contained"
          onClick={() => userPass()}
          sx={{ marginLeft: "120px" }}
        >
          LogIn
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
