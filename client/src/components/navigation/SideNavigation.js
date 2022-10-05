import classes from "./SideNavigation.module.css";
import { useState } from "react";

const SideNavigation = (props) => {
  const [activeItem, setActiveItem] = useState("0");

  const navItems = props.children.map((child) => {
    return (
      <li
        key={child.props.id}
        onClick={() => setActiveItem(child.props.id)}
        className={
          activeItem === child.props.id ? classes.active : classes.deactive
        }
      >
        {child}
      </li>
    );
  });
  return (
    <aside>
      <div className={classes["ctn-menu"]} id="temario">
        <ul className={classes["list"]}>
          <li className={classes["top-bar"]}></li>
          {navItems}
          <li className={classes["bottom-bar"]}></li>
        </ul>
      </div>
    </aside>
  );
};

export default SideNavigation;
