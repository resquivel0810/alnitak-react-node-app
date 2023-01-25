import SecondaryButton from "../inputs/Button";
import Paper from "./Paper";

import classes from "./SolutionCard.module.css";

const SolutionCard = (props) => {
  return (
    <div className={classes.solutionCard}>
      <Paper orientation="right">
        <div className={classes.paperContent}>
          <h1 className={classes.title}>{props.title_1}</h1>
          <h1 className={classes.title}>{props.title_2}</h1>
          <h3 className={classes.subtitle}>{props.subtitle}</h3>
          <div className={classes.body}>{props.body}</div>
          <div className={classes["btn-ctn"]}>
            <SecondaryButton>{props.cta}</SecondaryButton>
          </div>

          <div className={classes.imageContainer}>{props.children}</div>
        </div>
      </Paper>
    </div>
  );
};

export default SolutionCard;
