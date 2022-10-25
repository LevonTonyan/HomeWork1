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
    let user = this.state.users.filter(u => {
      return  u.userName === credentials.user &&
      u.password === credentials.password
    });
    user.length?this.setState(() => ({ isLoggedIn: true, currentUser: user[0].userName })):
    this.setState(() => ({ displayError: true}))
  };

  logout = () => {
    this.setState(() => ({ isLoggedIn: false, displayError: false }));
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

        {this.state.isLoggedIn ? <User user={ this.state.currentUser} /> :
         <LoginPage login={this.login} 
                     displayError={this.state.displayError}/>}
      </>
    );
  }
}

export default App;
