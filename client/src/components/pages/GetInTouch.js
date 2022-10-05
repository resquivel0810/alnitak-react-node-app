import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useEffect, useState, useRef } from "react";
import Paper from "../surfaces/Paper";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetInTouch = () => {
  const form = useRef();
  const [input, setInput] = useState({
    name: "",
    email: "",
  });

  const [solutions, setSolutions] = useState({
    landing: false,
    website: false,
    webapp: false,
    other: false,
  });

  const { landing, website, webapp, other } = solutions;

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const initError = {
    exists: false,
    helperText: null,
  };
  const [emailError, setEmailError] = useState(initError);
  const [nameError, setNameError] = useState(initError);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (!input.name && enteredNameTouched) {
      setNameError({
        exists: true,
        helperText: "Escribe un nombre",
      });
    } else {
      setNameError({
        exists: false,
        helperText: null,
      });
    }
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(input.email) && enteredEmailTouched) {
      setEmailError({
        exists: true,
        helperText: "Correo inválido",
      });
    } else {
      setEmailError({
        exists: false,
        helperText: null,
      });
    }
  }, [input, enteredNameTouched, enteredEmailTouched]);

  const nameIsValid = !nameError.exists && enteredNameTouched;
  const emailIsValid = !emailError.exists && enteredEmailTouched;

  const nameChangeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const nameBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };

  const emailChangeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const emailBlurHandler = (e) => {
    setEnteredEmailTouched(true);
  };

  const changeHandlerSolution = (e) => {
    setSolutions({
      ...solutions,
      [e.target.name]: e.target.checked,
    });
  };

  const formSubmitter = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if (!nameIsValid) {
      return;
    }
    if (!emailIsValid) {
      return;
    }
    emailjs
      .sendForm(
        "service_2ihf10c",
        "template_gmdnocj",
        form.current,
        "user_dkdwsh6rZCnlEDsc2EZGO"
      )
      .then(
        (result) => {
          toast(
            "Tu información se ha enviado. A la brevedad te contactaremos :D",
            {
              theme: "dark",
            }
          );
        },
        (error) => {
          toast("Hubo un error. No se pudo enviar tu información :(");
        }
      );
    e.target.reset();
    console.log(input);
    console.log(solutions);
    setInput({
      name: "",
      email: "",
    });
    setSolutions({
      landing: false,
      website: false,
      webapp: false,
      other: false,
    });
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  return (
    <section>
      <ToastContainer />
      <form ref={form} onSubmit={formSubmitter}>
        <Paper orientation="left">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "1.5rem",
            
            }}
          >
            <TextField
              id="name"
              name="name"
              label="Nombre"
              variant="filled"
              value={input.name}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              error={nameError.exists}
              helperText={nameError.helperText}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderRadius: "10px",
                marginBottom: "1rem",
                width: document.innerWidth < 480 ? "300px": "250px",
              }}
            />
            <TextField
              id="email"
              name="email"
              label="Correo"
              variant="filled"
              value={input.email}
              error={emailError.exists}
              helperText={emailError.helperText}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderRadius: "10px",
                marginBottom: "1rem",
                width: document.innerWidth < 480 ? "300px": "250px",
              }}
            />

            <Box sx={{ display: "flex" }}>
              <FormControl
                sx={{ marginTop: "0.5rem" }}
                component="fieldset"
                variant="standard"
              >
                <FormLabel
                  component="legend"
                  sx={{
                    color: "white",
                    marginBottom: "0.5rem",
                    
                  }}
                >
                  <h3>¿Qué soluciones te podemos brindar?</h3>
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        size="small"
                        checked={landing}
                        onChange={changeHandlerSolution}
                        name="landing"
                        sx={{
                          color: "white",
                        }}
                      />
                    }
                    label="Landing"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        size="small"
                        checked={website}
                        onChange={changeHandlerSolution}
                        name="website"
                        sx={{
                          color: "white",
                        }}
                      />
                    }
                    label="Sitio web"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        size="small"
                        checked={webapp}
                        onChange={changeHandlerSolution}
                        name="webapp"
                        sx={{
                          color: "white",
                        }}
                      />
                    }
                    label="Aplicación web"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        size="small"
                        checked={other}
                        onChange={changeHandlerSolution}
                        name="other"
                        sx={{
                          color: "white",
                        }}
                      />
                    }
                    label="Otra"
                  />
                </FormGroup>
              </FormControl>
            </Box>

            <div
              style={{
                marginTop: "1.5rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "#FFA800",
                  borderRadius: "16px",
                  width: "180px",
                  paddingBottom: "0.5rem",
                  paddingRight: "1rem",
                  paddingLeft: "1rem",
                  color: "black",
                  '&:hover':{backgroundColor: "#00FFE4"}
                }}
                onClick={() => {
                  setSubmit(!submit);
                }}
              >
                Enviar
              </Button>
            </div>
          </div>
        </Paper>
      </form>
    </section>
  );
};

export default GetInTouch;
