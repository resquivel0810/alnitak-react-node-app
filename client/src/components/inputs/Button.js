import Button from "@mui/material/Button";


const SecondaryButton = (props) => {
  return (
    <Button size="large"
    variant="outlined"
    sx={{
      backgroundColor: "#0380FF",
      color: "white",
      "&:hover": {
        backgroundColor: "#FFA800",
        color: "white",
        border: "1px solid #FFA800"
      }
    }}
    startIcon={props.icon}
    onClick={props.onClick}>
      {props.children}
    </Button>
  );
};

export default SecondaryButton;
