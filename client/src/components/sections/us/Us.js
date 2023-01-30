import Titles from "../../data_display/Titles";
import Paper from "../../surfaces/Paper";

//Assets
import innovation from "../../../assets/innovation.svg";

import design from "../../../assets/design.svg";
import creativity from "../../../assets/creativity.svg";
import technology from "../../../assets/technology.svg";

//CSS
import classes from "./Us.module.css";

const Us = () => {
    return (
        <div className={classes.ctn}>
        <Titles title="ALNITAK" subtitle="NOSOTROS" />
        <div className={classes.usCtn}>
          <div className={classes.usIcons}>
            <ul>
              <li>
                <div>
                  <img
                    width={window.innerWidth > 480 ? "135" : "95"}
                    src={innovation}
                  />
                  <h3>Innovación</h3>
                </div>
              </li>
              <li>
                <div>
                  <img
                    width={window.innerWidth > 480 ? "115" : "80"}
                    src={design}
                  />
                  <h3>Diseño</h3>
                </div>
              </li>
              <li>
                <div>
                  <img
                    width={window.innerWidth > 480 ? "100" : "75"}
                    src={creativity}
                  />
                  <h3>Creatividad</h3>
                </div>
              </li>
              <li>
                <div>
                  <img
                    width={window.innerWidth > 480 ? "95" : "75"}
                    src={technology}
                  />
                  <h3>Tecnología</h3>
                </div>
              </li>
            </ul>
          </div>
          <div
            className={classes.moto}
            style={{
              marginBottom: "3rem",
              marginTop: window.innerWidth > 480 ? "2rem" : "8rem",
              textAlign: "center",
            }}
          >
            <div>
              Buscamos que el crecimiento web de nuestros clientes sea
              vertical, no sólo horizontal.
            </div>
          </div>
          <div className={classes.usBox}>
            <Paper orientation="left">
              <div
                style={{
                  fontSize: "18px",
                  padding: window.innerWidth > 480 ? "2rem" : "0rem",
                }}
              >
                Contamos con profesionales en distintas áreas para un
                desarrollo eficaz y brindar servicios end to end. Nuestro
                equipo multidisciplinario acompaña en el diseño del sitio y
                creación de contenidos más adaptables a cada cliente.
                Transformamos ideas en procesos creativos digitales.
              </div>
            </Paper>
          </div>
        </div>
      </div>
    )
}

export default Us