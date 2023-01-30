import classes from "./Titles.module.css";
import alnitakLogo from "../../assets/alnitak_logo_v2_dark_background.svg";


const Titles = (props) => {
  return (
    <div className={classes.ctn}>
      <div className={classes.title}>
        <img src={alnitakLogo} alt="Alnitak Logo" 
        width={props.width ? props.width : "400px"}
        height={props.height ? props.height : "auto"}
        style={{ 
          position: "absolute", 
          top: "-140px", 
          left: //center the logo
            props.width ?
              `calc(50% - ${props.width/2}px)` :
              "calc(50% - 200px)"
        }}
        />
      </div>
      <div className={classes.subtitle}
        style={{
          position: "absolute",
          top: "90px",
          left: //center the subtitle
            props.width ?
              `calc(50% - ${props.width/2}px)` :
              "calc(50% - 200px)",
          width: props.width ? props.width : "400px",
        }}
      >
        <h1>{props.subtitle}</h1>
      </div>
    </div>
  );
};

export default Titles;
