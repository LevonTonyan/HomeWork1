import { Button, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import { AppBar } from "@mui/material";

const Navbar = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={10}>
            <Typography sx={{ display: { xs: "none", sm: "block" } }}>
              ACA React
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>
              {props.isLoggedIn ? props.currentUser : null}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            {props.isLoggedIn ? (
              <Button
                variant="contained"
                sx={{ background: "black", marginLeft: "10px" }}
                onClick={() => props.logout()}
              >
                LogOut
              </Button>
            ) : null}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
