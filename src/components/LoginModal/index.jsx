import { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Link,
} from "@mui/material";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import LoginIcon from "@mui/icons-material/Login";
import UsersService from "../../services/usersService";
import LogInForm from "./components/LoginForm";
import SignInForm from "./components/SignInForm";

const LoginModal = () => {
  const { register, handleSubmit } = useForm();
  const [showLoginForm, setShowLoginForm] = useState(true);

  const onSubmit = async (data) => {
    UsersService.login(data)
      .then((response) => console.log("response =>", response))
      .catch((err) => {
        if (err.response.data.error === "User not found.") {
          toast.error("Usuário não encontrado.", {
            autoClose: 3000,
            closeOnClick: true,
          });
        }

        if (err.response.status === 500) {
          toast.error("Houve um erro interno.", {
            autoClose: 3000,
            closeOnClick: true,
          });
        }
      });
  };

  return (
    <Card style={{ width: "90%", height: showLoginForm ? "32%" : "44%" }}>
      <CardContent>
        <Typography
          variant="h4"
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          {showLoginForm ? "Entrar" : "Cadastrar"}
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column", height: "13rem" }}
        >
          {showLoginForm ? (
            <LogInForm register={register} />
          ) : (
            <SignInForm register={register} />
          )}
          <hr style={{ margin: "1rem 0", color: "rgb(200, 200, 200)" }} />
          <CardActions
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              type="submit"
              size="small"
              variant="contained"
              color="primary"
              startIcon={<LoginIcon />}
            >
              {showLoginForm ? "Entrar" : "Cadastrar"}
            </Button>
          </CardActions>
          {showLoginForm ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: ".5rem 0",
              }}
            >
              <p style={{ marginRight: ".3rem" }}>Ainda não tem uma conta?</p>
              <Link
                component="button"
                variant="inherit"
                underline="hover"
                onClick={() => setShowLoginForm(!showLoginForm)}
              >
                Cadastre-se
              </Link>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: ".5rem 0",
              }}
            >
              <p style={{ marginRight: ".3rem" }}>
                Já tem uma conta?{" "}
                <Link
                  component="button"
                  underline="hover"
                  variant="inherit"
                  onClick={() => setShowLoginForm(!showLoginForm)}
                >
                  Conecte-se
                </Link>
              </p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginModal;
