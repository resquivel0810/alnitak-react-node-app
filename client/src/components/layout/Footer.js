import Tooltip from '@mui/material/Tooltip';
import TwitterIcon from '@mui/icons-material/Twitter';

import classes from "./Footer.module.css";
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';

const Footer = (props) => {

  const twitterHandler = () => {
    window.open("https://twitter.com/alnitakmx", "_blank");
  };
  
  return (
    <footer className={classes.footer}>
      <div className={classes["left-side"]}>
        <span >
          <Link style={{color:'white'}} to={"/aviso-de-privacidad"}>Aviso de privacidad</Link>
        </span>
        <span>|</span>
        <span>Alnitak 2023</span>
      </div>
      <div className={classes["right-side"]}>
        <div className={classes["social-networks"]}>
          <ul>
            <li>
              <Button onClick={twitterHandler}>
                <TwitterIcon />
              </Button>  
              </li>
          </ul>
        </div>
        <span className={classes.item}>55 5555 5555</span>
        <span className={classes.item}>|</span>
        
          
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
