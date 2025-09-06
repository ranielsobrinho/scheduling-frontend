import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { Grid2 as Grid, CssBaseline, Card } from "@mui/material";
import BarberBackground from "../../assets/barber-2.jpg";
import LoginModal from "../../components/LoginModal";
import { useState } from "react";
import SignInModal from "../../components/SignInModal";
import "./index.css";
import useStyles from "./styles";

const Login = () => {
  const classes = useStyles();
  const [loginModal, setLoginModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);

  const openLoginModal = () => {
    setLoginModal(true);
  };

  const openSignInModal = () => {
    setSignInModal(true);
  };
  return (
    <>
      <CssBaseline />
      <Grid
        item
        size={8}
        style={{
          backgroundImage: `url(${BarberBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
        }}
        className="blur-bg"
      >
        <AppBar position="static" color="transparent">
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <AdbIcon
                  sx={{
                    display: { xs: "none", md: "flex" },
                    mr: 1,
                    color: "white",
                  }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Seu Carlos
                </Typography>
              </div>

              <div>
                <Button onClick={openLoginModal} sx={{ my: 2, color: "white" }}>
                  Entrar
                </Button>
                <Button
                  onClick={openSignInModal}
                  sx={{ my: 2, color: "white" }}
                >
                  Cadastrar
                </Button>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
        <div className={classes.root}>
          <Card className={classes.card}>
            <Typography variant="h1" color="orange" fontFamily={"cursive"}>
              Seu Carlos Barber
            </Typography>
            <Typography variant="subtitle1" color="orange" gutterBottom={true}>
              O lugar que transforma você para seu melhor visual e na sua melhor
              versão
            </Typography>
            <Button size="medium" variant="contained" color="warning">
              Agendar horário
            </Button>
          </Card>
        </div>
      </Grid>
      <LoginModal open={loginModal} handleClose={() => setLoginModal(false)} />
      <SignInModal
        open={signInModal}
        handleClose={() => setSignInModal(false)}
      />
    </>
  );
};

export default Login;
