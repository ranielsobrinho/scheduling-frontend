import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
  },
  card: {
    width: "30vw",
    height: "42vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "rgba(255, 255, 255, 0.25)", // Semi-transparent white
    backdropFilter: "blur(10px)", // Blur effect for content behind the card
    WebkitBackdropFilter: "blur(10px)", // For Safari support
    border: "1px solid rgba(255, 255, 255, 0.2)", // Optional: Subtle border
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
  },
  cardMedia: {
    maxWidth: "512px",
    maxHeight: "512px",
  },
}));

export default useStyles;
