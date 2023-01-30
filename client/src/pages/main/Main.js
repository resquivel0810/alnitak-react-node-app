// import './App.css';
import classes from "./Main.module.css";

import React, {
  Suspense,
  useState,
  Fragment,
} from "react";
import ThreeScene from "../../components/ThreeScene";
import * as THREE from "three";

import Footer from "../../components/layout/Footer";

import Tabs from "../../components/navigation/Tabs";
import Tab from "../../components/navigation/Tab";


import GetInTouch2 from "../../components/sections/get_in_touch/GetInTouch2";
import Titles from "../../components/data_display/Titles";



import {
  Stars,
  PresentationControls,
} from "@react-three/drei";

import Solutions from "../../components/sections/solutions/Solutions";
import Home from "../../components/sections/home/Home";
import Us from "../../components/sections/us/Us";
import TechnologiesCanvas from "../../components/sections/technologies/Technologies";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  const [starCount, setStarCount] = useState(5000);
  const [rayleigh, setRayleigh] = useState(1000);
  const [rotation, setRotation] = useState(0);

  return (
    <Fragment>
      <Suspense fallback={null}>
        <ThreeScene className={classes.r3fCanvas}>
          <color attach="background" args={["#3D4064"]} />
          <PresentationControls
            global={true} // Spin globally or by dragging the model
            cursor={true} // Whether to toggle cursor style on drag
            snap={false} // Snap-back to center (can also be a spring config)
            speed={0.05} // Speed factor
            zoom={0} // Zoom factor when half the polar-max is reached
            rotation={[0, rotation, 0]} // Default rotation
            polar={[-Infinity, Infinity]} // Vertical limits
            azimuth={[-Infinity, Infinity]} // Horizontal limits
            config={{ mass: 1, tension: 17, friction: 26 }} // Spring config
          >

            <Stars count={starCount} />
          </PresentationControls>
          {/* <OrbitControls /> */}
          <hemisphereLight
            skycolor={new THREE.Color(0xe6ce4a)}
            groundColor={new THREE.Color(0xe6ce4a)}
            intensity={2}
            position={[0, 100, 10]}
          />
        </ThreeScene>
      </Suspense>
      <Navigation
        onTabClick={() => {
          setActiveTab(sessionStorage.getItem("activeTab"));
          setStarCount(sessionStorage.getItem("starCount"));
          setRayleigh(sessionStorage.getItem("rayleigh"));
          setRotation(parseFloat(sessionStorage.getItem("rotation")));
        }}
        activeTab={activeTab}
      />
      <Footer />
    </Fragment>
  );
}

function Navigation(activeTab, onTabClick = (f) => f) {
  const [rotation, setRotation] = useState([0, 0, 0]);
  const onMouseMove = (e) => {
    setRotation([
      ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 6,
      ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 6,
      0,
    ]);
  };
  
  return (
    <Tabs onTabClick={onTabClick} activeTab={activeTab}>
      <Tab label={"home"} tabName={"HOME"}>
        <Home onMouseMove={onMouseMove} rotation={rotation} />
      </Tab>
      <Tab label={"solutions"} tabName={"SOLUCIONES"} id="solutions">
        <Solutions />
      </Tab>
      <Tab label={"tecnologies"} tabName={"TECNOLOGIAS "}>
        <TechnologiesCanvas />
      </Tab>
      <Tab label={"us"} tabName={"NOSOTROS"}>
       <Us />
      </Tab>
      <Tab label={"contact"} tabName={"CONTACTO"}>
        <Titles title="ALNITAK" subtitle="CONTÁCTANOS" />
        <div className={classes.getInTouchContainer}>
          <GetInTouch2 />
        </div>     
      </Tab>
    </Tabs>
  );
}