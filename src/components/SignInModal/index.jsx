import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import LoginIcon from "@mui/icons-material/Login";
import UsersService from "../../services/usersService";
import SignInForm from "../SignInForm";

const SignInModal = ({ open, handleClose }) => {
  const { register, handleSubmit } = useForm();

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
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="md">
      <DialogTitle>Cadastrar uma nova conta</DialogTitle>
      <DialogContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            height: "17rem",
          }}
        >
          <SignInForm register={register} />
        </form>
      </DialogContent>
      <DialogActions>
        <div style={{ paddingRight: "1rem" }}>
          <Button color="error" onClick={handleClose}>
            Fechar
          </Button>
          <Button
            type="submit"
            size="small"
            variant="outlined"
            color="primary"
            startIcon={<LoginIcon />}
          >
            Cadastrar
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
};

SignInModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default SignInModal;
