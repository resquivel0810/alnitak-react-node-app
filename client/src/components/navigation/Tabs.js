import { useState, useRef } from "react";
import Bar from "./Bar";
import classes from "./Tabs.module.css";

const Tabs = (props) => {
  const [position, setPosition] = useState(155);
  const [activeTab, setActiveTab] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const barElement = useRef();

  const handleActiveTab = (label, e) => {
    let barBoundaries = barElement.current.getBoundingClientRect();
    let btnLabelBoundaries = e.target.getBoundingClientRect();
    let newPosition =
      btnLabelBoundaries.x -
      barBoundaries.x +
      (btnLabelBoundaries.width - 22) / 2;
    setActiveTab(label);
    setPosition(newPosition);
  };

  const tabs = props.children.map((child) => {
    return (
      <li
        key={child.props.label}
        className={
          activeTab === child.props.label ? classes.active : classes.deactive
        }
      >
        <button
          className={
            activeTab === child.props.label ? classes.active : classes.deactive
          }
          onClick={(e) => {
            props.activeTab.onTabClick(activeTab);
            handleActiveTab(child.props.label, e);
            window.scrollTo(0, 0);
          }}
          onMouseOver={() => {
            sessionStorage.setItem("activeTab", child.props.label);
            sessionStorage.setItem("starCount", 5000);
            sessionStorage.setItem("rayleigh", 1000);
            sessionStorage.setItem("rotation", 0);
            if (sessionStorage.getItem("activeTab") == "solutions") {
              sessionStorage.setItem("starCount", 4000);
              sessionStorage.setItem("rayleigh", 500);
              sessionStorage.setItem("rotation", -0.5);
            } else if (sessionStorage.getItem("activeTab") == "tecnologies") {
              sessionStorage.setItem("starCount", 3000);
              sessionStorage.setItem("rayleigh", 30);
              sessionStorage.setItem("rotation", -1);
            } else if (sessionStorage.getItem("activeTab") == "us") {
              sessionStorage.setItem("starCount", 2500);
              sessionStorage.setItem("rayleigh", 20);
              sessionStorage.setItem("rotation", -1.5);
            } else if (sessionStorage.getItem("activeTab") == "contact") {
              sessionStorage.setItem("starCount", 1500);
              sessionStorage.setItem("rayleigh", 10);
              sessionStorage.setItem("rotation", -2);
            }
          }}
        >
          {child.props.tabName}
        </button>
      </li>
    );
  });

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {props.children.filter(
          (child) => child.props.label === props.activeTab.activeTab
        )}
      </div>
      <div className={classes.tabs}>
        <ul className={classes.list}>
          {!isMenuOpen ? (
            <div
              className={classes["burger-menu"]}
              onClick={() => {
                setIsMenuOpen(true);
              }}
            >
              <li className={classes["top-bar-close"]}></li>
              <li className={classes["bottom-bar-close"]}></li>
            </div>
          ) : (
            <div className={classes.nav}>
              <li
                className={classes["top-bar"]}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              ></li>
              {tabs}
              <li
                className={classes["bottom-bar"]}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              ></li>
            </div>
          )}
        </ul>
        <Bar x={position} ref={barElement} />
      </div>
    </div>

    //   <div className={classes.tabs}>
    //     <ul className={classes.list}>
    //       <li className={classes["top-bar"]}></li>
    //       {tabs}
    //       <li className={classes["bottom-bar"]}></li>
    //     </ul>
    //     <Bar x={position} ref={barElement} />
    //   </div>
  );
};

export default Tabs;
