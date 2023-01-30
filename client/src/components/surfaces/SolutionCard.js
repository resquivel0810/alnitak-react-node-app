import SecondaryButton from "../inputs/Button";
import Paper from "./Paper";
import { Link } from "react-router-dom";

import classes from "./SolutionCard.module.css";

const SolutionCard = (props) => {
  return (
    <div className={classes.solutionCard}>
      <Paper orientation="right">
        <div className={classes.paperContent}>
          <h2 className={classes.title}>{props.title_1}</h2>
          <h2 className={classes.title}>{props.title_2}</h2>
          <h3 className={classes.subtitle}>{props.subtitle}</h3>
          <div className={classes.body}>{props.body}</div>
          

          <div className={classes.imageContainer}>{props.children}</div>
          <div className={classes["btn-ctn"]}>
            <SecondaryButton icon={props.icon} onClick={props.onClick} >
              <Link 
                to={props.linkTo}
              >
                {props.cta}
              </Link>
              
              </SecondaryButton>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default SolutionCard;
