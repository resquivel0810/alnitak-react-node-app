import { useEffect, useState, forwardRef } from "react";
import classes from "./Bar.module.css";

const Bar = forwardRef((props, ref) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle({
      transform: `translateX(${props.x}px)`,
    });
  }, [props.x]);

  return (
    <div className={classes["bar-ctn"]} ref={ref}>
      <div className={classes.line}></div>
      <div className={classes.thumb} id="bar" style={style}></div>
    </div>
  );
});

export default Bar;
