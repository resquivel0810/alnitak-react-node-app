import Button from "@mui/material/Button";

const SecondaryButton = (props) => {
  return (
    <Button variant="contained" color="primary" onClick={props.onClick}>
      {props.children}
    </Button>
  );
};

export default SecondaryButton;
