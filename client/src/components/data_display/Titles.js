import classes from "./Titles.module.css";

const Titles = (props) => {
  return (
    <div className={classes.ctn}>
      <div className={classes.title}>
        <h1>{props.title}</h1>
      </div>
      <div className={classes.subtitle}>
        <h1>{props.subtitle}</h1>
      </div>
    </div>
  );
};

export default Titles;
