import Tooltip from '@mui/material/Tooltip';

import classes from "./Footer.module.css";
import { Link } from 'react-router-dom'

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <div className={classes["left-side"]}>
        <span >
          <Link style={{color:'white'}} to={"/aviso-de-privacidad"}>Aviso de privacidad</Link>
        </span>
        <span>|</span>
        <span>Alnitak 2022</span>
      </div>
      <div className={classes["right-side"]}>
        <div className={classes["social-networks"]}>
          <ul>
            <li>*</li>
            <li>*</li>
            <li>*</li>
          </ul>
        </div>
        <span>55 5555 5555</span>
        <span>|</span>
        
          
          <Tooltip title="¡Escríbenos!">
            <a className={classes.email} href="mailto: hola@alnitak.mx">
              hola@alnitak.mx   
            </a>   
          </Tooltip>  
        
      </div>
    </footer>
  );
};

export default Footer;
