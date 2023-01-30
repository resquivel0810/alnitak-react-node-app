import { useEffect, useState, useRef, Fragment } from "react";

import * as THREE from "three";

import ThreeScene from "../../ThreeScene";
import Model2 from "../../ContactShip";


//CSS
import classes from "./GetInTouch.module.css"


export default function GetInTouch2() {
    const form = useRef();
    const [status, setStatus] = useState("notSubmitted");
    const [input, setInput] = useState({
        name: "",
        email: "",
        message:""
    });

    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
    const [enteredMessageTouched, setEnteredMessageTouched] = useState(false);

    const initError = {
        exists: false,
        helperText: null,
    };

    const [nameError, setNameError] = useState(initError);
    const [emailError, setEmailError] = useState(initError);
    const [messageError, setMessageError] = useState(initError);
    

    
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
        if (!input.message && enteredMessageTouched) {
          setMessageError({
            exists: true,
            helperText: "Escribe un mensaje",
          });
        } else {
          setMessageError({
            exists: false,
            helperText: null,
          });
        }
      }, [input, enteredNameTouched, enteredEmailTouched, enteredMessageTouched]);

    const nameIsValid = !nameError.exists && enteredNameTouched;
    const emailIsValid = !emailError.exists && enteredEmailTouched;
    const messageIsValid = !messageError.exists && enteredMessageTouched;

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

    const messageChangeHandler = (e) => {
      setInput({ ...input, [e.target.name]: e.target.value });
      // console.log(e.target.value)
    };
    const messageBlurHandler = (e) => {
      setEnteredMessageTouched(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnteredNameTouched(true);
        setEnteredEmailTouched(true);
        setEnteredMessageTouched(true);
        // console.log(!nameIsValid)
        // console.log(!emailIsValid)
        console.log(nameError)
        console.log(emailError)
        
        if (!nameIsValid) {
            return;
        }
        if (!emailIsValid) {
            return;
        }
        if (!messageIsValid) {
          return;
        }
        setStatus("Submitted");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        fetch("https://alnitak-react-node-app.herokuapp.com/send_email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        })
        
        
    }
    if(status === 'Submitted'){
        return(
            <h1 style={{width:"300px", padding:"100px"}}>Te hemos enviado un correo, en la brevedad nos pondremos en contacto contigo</h1>
        )
    }

    let motherShipPos;
    if (window.innerWidth > 480) {
      motherShipPos = [0, 0, 0];
    } else {
      motherShipPos = [1, -8, 0];
    }

    return (
        <div
          style={
            {
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "130px",
            }
          }
        >
        <form
            onSubmit={handleSubmit}
            ref={form}
            // action="/send_email"
            // method="POST"
            style={{width:"300px", backgroundColor:"rgba(0,0,0,.47)", padding:"2rem", borderRadius:"32px 0 0 0", display: "inline-grid",justifyContent: "center"}}
        >
           
            <label className={classes.customField}>
                <input
                    placeholder="&nbsp;"
                    type="text"
                    name="name"
                    // required
                    value={input.name}
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                />
                <span className={classes.placeholder}>Nombre</span>
                <span className="error-message" aria-live="polite">{nameError.helperText}</span>
            </label>

             <label className={classes.customField}>
                <input
                    placeholder="&nbsp;"
                    type="text"
                    name="email"
                    // required
                    value={input.email}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
                <span className={classes.placeholder}>Correo</span>
                <span className="error-message" aria-live="polite">{emailError.helperText}</span>
            </label>
         
            <label className={classes.customField}>
                <textarea
                    placeholder="&nbsp;"
                    type="text"
                    name="message"
                    // required
                    value={input.message}
                    onChange={messageChangeHandler}
                    onBlur={messageBlurHandler}
                ></textarea>
                <span className={classes.placeholder}>Escríbenos...</span>
                <span className="error-message" aria-live="polite">{messageError.helperText}</span>
            </label>
            <button type="submit" className={classes.sendBtn}>ENVIAR</button>
    </form>
    {/* <div>
      { window.location.hash === '#success' &&
        <div id="success">
          <p>Te hemos enviado un correo, te responderemos a la brevedad</p>
        </div>
      }
      { window.location.hash === '#error' &&
        <div id="error">
          <p>No se pudo mandar el mensaje.</p>
        </div>
      }
    </div> */}
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <ThreeScene style={{
        width: "500px",
        height: "500px",
      }}>
            <group scale={5}>
              <Model2
                rotation={[0, -Math.PI / 3, -Math.PI / 6]}
                position={motherShipPos}
              />
              <hemisphereLight
                skycolor={new THREE.Color(0xffd403)}
                groundColor={new THREE.Color(0xffd403)}
                intensity={1}
                position={[0, 100, 10]}
              />
            </group>
            {/* <OrbitControls enableZoom={false} /> */}
          </ThreeScene>
    </div>
    </div>
    )
}

