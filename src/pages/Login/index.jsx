import { Grid2 as Grid, CssBaseline } from "@mui/material";
import SeuCarlosBackground from "../../assets/seu-carlos.png";
import LoginModal from "../../components/LoginModal";

const Login = () => {
  return (
    <>
      <CssBaseline />
      <Grid container spacing={1}>
        <Grid item size={8}>
          <img
            src={SeuCarlosBackground}
            alt="Seu Carlos's image"
            style={{ height: "99.9vh", width: "60vw" }}
          />
        </Grid>
        <Grid
          item
          size={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#A5A5A5",
          }}
        >
          <LoginModal />
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
