import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const SignInForm = ({ register }) => {
  return (
    <>
      <TextField
        id="standard-basic"
        variant="outlined"
        name="name"
        label="Nome"
        required
        {...register("name")}
        style={{ marginTop: ".7rem" }}
      />

      <TextField
        id="standard-basic"
        variant="outlined"
        name="email"
        label="Email"
        required
        {...register("email")}
        style={{ marginTop: ".7rem" }}
      />

      <TextField
        id="standard-basic"
        variant="outlined"
        name="phone"
        label="Telefone"
        required
        {...register("phone")}
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
    </>
  );
};

SignInForm.propTypes = {
  register: PropTypes.func,
};

export default SignInForm;
