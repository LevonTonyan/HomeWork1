import React from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import LoginPage from "./LoginPage";
import User from "./User";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, userName: "Levon", password: "123" },
        { id: 2, userName: "Narek", password: "111" },
        { id: 3, userName: "Vazgen", password: "333" },
      ],
      isLoggedIn: false,
      currentUser: null,
      displayError: false,
    };
  }

  login = (credentials) => {
    this.state.users.forEach((user) => {
      if (
        user.userName === credentials.user &&
        user.password === credentials.password
      ) {
        this.setState(() => ({ isLoggedIn: true, currentUser: user.userName }));
      }
    });
  };

  logout = () => {
    this.setState(() => ({ isLoggedIn: false }));
  };

  render() {
    return (
      <>
        <Box>
          <Navbar
            isLoggedIn={this.state.isLoggedIn}
            currentUser={this.state.currentUser}
            logout={this.logout}
          ></Navbar>
        </Box>

        {this.state.isLoggedIn ? <User user={ this.state.currentUser} /> : <LoginPage login={this.login} />}
      </>
    );
  }
}

export default App;
