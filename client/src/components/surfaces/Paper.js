import classes from "./Paper.module.css";

const Paper = (props) => {
  let cls;
  switch (props.orientation) {
    case "left":
      cls = classes["paper-left"];
      break;
    case "right":
      cls = classes["paper-right"];
      break;
    default:
      cls = classes["paper"];
  }
  return <div className={cls}>{props.children}</div>;
};

export default Paper;
