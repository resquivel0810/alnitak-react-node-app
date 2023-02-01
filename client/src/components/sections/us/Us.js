
import Titles from "../../data_display/Titles";
import Paper from "../../surfaces/Paper";

//Assets
import innovation from "../../../assets/innovation.svg";

import design from "../../../assets/design.svg";
import creativity from "../../../assets/creativity.svg";
import technology from "../../../assets/technology.svg";

//MUI
import GroupsIcon from '@mui/icons-material/Groups';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';

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
              Somos un grupo de profesionales en el desarrollo de soluciones tecnológicas.
            </div>
          </div>
          <div className={classes.usBox}>
            <Paper orientation="left">
              <div
                
                style={{
                  fontSize: "18px",
                  padding: window.innerWidth > 480 ? "2rem" : "0rem",
                  height: "100px",
                  overflowY: "scroll",
                }}
              > 
                <p>
                 Cada uno de nosotros compartimos el gusto por la tecnología y la innovación. Nos apasiona conectar INOVACIÓN, DISEÑO, CREATIVIDAD y TECNOLOGÍA para crear soluciones digitales que generen valor a nuestros clientes. En nuestro equipo somos diseñadores, desarrolladores, ingenieros, creativos, estrategas y analistas. Somos un equipo multidisciplinario, desde mercadólogos hasta matemáticos, pasando por ingenieros, diseñadores y desarrolladores.
                </p>
               
                
              <div className={classes.section}>
                <div className={classes.title}>
                  <h3>Proyectos</h3>
                  <IntegrationInstructionsIcon />
                </div>
                <div className={classes.content}>
                  <p>
                  Hemos participado en la creación de proyectos de gran envergadura, desde plataformas de bienes inmuebles hasta la creación de aplicaciones fintech. Tenemos experiencia creando CRM, WMS, PFM, Web Scraping, eCommerce, entre otros. 
                  </p>
                </div>
              </div>
              <div className={classes.section}>
                <div className={classes.title}>
                  <h3>Desarrollo</h3>
                  <ImportantDevicesIcon />
                </div>
                <div className={classes.content}>
                  <p>
                  En nuestro equipo usamos metodologías ágiles para el desarrollo. Esto nos permite tener un feedback constante con el cliente y adaptar el proyecto a sus necesidades. Dividimos los proyectos en sprints y entregamos características funcionales del producto al final de cada uno de ellos.
                  </p>
               
                </div>
              </div>
              
              <div className={classes.section}>
                <div className={classes.title}>
                  <h3>Soporte</h3>
                  <EngineeringIcon />
                </div>
                <div className={classes.content}>
                  <p>
                  Cada proyecto que desarrollamos cuenta con un equipo de soporte técnico. Esto nos permite dar mantenimiento a los proyectos y hacer mejoras en ellos. Así como también, dar soporte a los clientes en caso de que tengan alguna duda o problema con el producto.
                  </p>
                </div>
              </div>

              </div>
            </Paper>
          </div>
        </div>
      </div>
    )
}

export default Us