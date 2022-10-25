import React from "react";
import "./App.css";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Error from "./Error";


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
      {props.displayError?<Error/>:null}
        <TextField label="Username" inputRef={userNameRef} error={props.displayError}/>
        <TextField type="password" label="password" inputRef={passwordRef} error={props.displayError}/>
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
