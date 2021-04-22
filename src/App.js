import React from "react";
import logo from "./logo.svg";
import { createBrowserHistory } from "history";

import "./App.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { orange, green } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import { Paper, Grid } from "@material-ui/core";

import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 42,
    },
  },
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg,#333,#999)",
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: "10px 30px",
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Testing a styles button</Button>;
}

function CheckboxExample() {
  const [checked, setchecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<SaveIcon />}
          checkedIcon={<DeleteIcon />}
          onChange={(e) => setchecked(e.target.checked)}
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
        />
      }
      label="Testing Checkbox"></FormControlLabel>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <div className="App" style={{ marginTop: "58px" }}>
          <header className="App-header">
            <AppBar>
              <Toolbar>
                <IconButton>
                  <Menu />
                </IconButton>
                <Typography variant="h6" style={{ width: "100%" }}>
                  MUI Themeing
                </Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>

            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="h5">Learning Material UI</Typography>
            <Typography variant="subtitle1">Using a smaller font</Typography>
            <ButtonStyled />
            <TextField
              variant="filled"
              color="secondary"
              type="date"
              label="The Time"
            />
            <Grid container spacing={2} justify="center">
              <Grid item xs={12} sm={6} lg={4}>
                <Paper style={{ height: 75, width: "100%" }}></Paper>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Paper style={{ height: 75, width: "100%" }}></Paper>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Paper style={{ height: 75, width: "100%" }}></Paper>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              justify="center"
              style={{ marginTop: "50px" }}>
              <Grid item xs>
                <Paper style={{ height: 75, width: "100%" }}></Paper>
              </Grid>
              <Grid item xs>
                <Paper style={{ height: 75, width: "100%" }}></Paper>
              </Grid>
              <Grid item xs>
                <Paper style={{ height: 75, width: "100%" }}></Paper>
              </Grid>
            </Grid>
            <CheckboxExample />
            <ButtonGroup variant="contained" size="large">
              <Button
                startIcon={<SaveIcon />}
                style={{ fontSize: 24 }}
                onClick={() => alert("hello")}
                color="primary">
                Save
              </Button>
              <Button
                startIcon={<DeleteIcon />}
                style={{ fontSize: 24 }}
                onClick={() => alert("hello")}
                variant="contained"
                size="large"
                color="secondary">
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
