import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import LoginIcon from "@mui/icons-material/Login";
import UsersService from "../../services/usersService";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // TODO: Deve chamar a rota de login
    console.log("Dados do submit =>", data);
    UsersService.login(data)
      .then((response) => console.log("response =>", response))
      .catch((err) => console.log("err => ", err));
  };

  return (
    <Card style={{ width: "90%" }}>
      <CardContent>
        <Typography
          variant="h4"
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          Agendar um atendimento
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column", height: "13rem" }}
        >
          <TextField
            id="standard-basic"
            variant="outlined"
            name="username"
            label="Usuário"
            required
            {...register("username")}
            style={{ marginTop: ".7rem" }}
          />

          <TextField
            id="standard-password-input"
            variant="outlined"
            type="password"
            name="password"
            label="Senha"
            required
            {...register("password")}
            style={{ marginTop: ".7rem" }}
          />
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
              Entrar
            </Button>
            <Button
              size="small"
              variant="outlined"
              color="info"
              // startIcon={<DoneIcon />}
            >
              Cadastrar
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
