// import './App.css';
import classes from "./Main.module.css";

import React, {
  Suspense,
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
} from "react";
import ThreeScene from "../../components/ThreeScene";
import * as THREE from "three";

import Model from "../../components/Star";
import Model2 from "../../components/ContactShip";
import Model3 from "../../components/LandingShip";
import Model4 from "../../components/WebpageShip";
import Model5 from "../../components/WebappShip";
import Footer from "../../components/layout/Footer";

import Tabs from "../../components/navigation/Tabs";
import Tab from "../../components/navigation/Tab";
import Paper from "../../components/surfaces/Paper";
import GetInTouch from "../../components/pages/GetInTouch";
import Titles from "../../components/data_display/Titles";
import GetInTouch2 from "../../components/pages/GetInTouch2";

import {
  OrbitControls,
  Stars,
  Text,
  ScrollControls,
  useScroll,
  Line,
  Html,
  Sky,
  PresentationControls,
  Text3D,
} from "@react-three/drei";
import useRefs from "react-use-refs";
import { useFrame, Canvas, useThree} from "@react-three/fiber";

import innovation from "../../innovation.svg";
import design from "../../design.svg";
import creativity from "../../creativity.svg";
import technology from "../../technology.svg";

import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
// extend({ EffectComposer, RenderPass, UnrealBloomPass });

import { Link } from 'react-router-dom'

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  
  const [starCount, setStarCount] = useState(5000) 
  const [rayleigh, setRayleigh] = useState(1000)
  const [rotation, setRotation] = useState(0)

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  return (
    <>
   <Suspense fallback={null}>
    <ThreeScene className={classes.r3fCanvas}>
   
      <color attach="background" args={['#3D4064']} />
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
        {/* <Sky sunPosition={[1, .0005,1]} turbidity={0} rayleigh={rayleigh}/> */}
        <Model3
          scale={0.03} 
          position={[getRandomArbitrary(-100,-50), 0, 0]}
          rotation={[0,-Math.PI/2,0]}
          xMov={.05}
          xRot={0.001}
          yMov={1}
        />
        <Model3
          scale={0.04} 
          position={[getRandomArbitrary(-100,-50), 15, 0]}
          rotation={[0,-Math.PI/2,0]}
          xMov={.05}
          xRot={0.005}
          yMov={1}
        />
        <Model3
          scale={0.06} 
          position={[getRandomArbitrary(-100,-50), -30, 0]}
          rotation={[0,-Math.PI/2,0]}
          xMov={.05}
          xRot={0.005}
          yMov={1}
        />
        <Model4
          scale={1.5} 
          position={[getRandomArbitrary(100,50), 30, 0]}
          rotation={[0,0,0]}
          xMov={.05}
          xRot={0.00005}
          yMov={1}
        />
        <Model4
          scale={1.5} 
          position={[getRandomArbitrary(100,50), -10, 0]}
          rotation={[0,0,0]}
          xMov={.07}
          xRot={0.00005}
          yMov={1}
        />
        <Model5
          scale={2} 
          position={[getRandomArbitrary(100,150), -40, 0]}
          rotation={[0,0,0]}
          xMov={.05}
          xRot={0.00005}
          yMov={.025}
        />
        
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
      onTabClick={()=>{
        setActiveTab(sessionStorage.getItem("activeTab"))
        setStarCount(sessionStorage.getItem("starCount"))
        setRayleigh(sessionStorage.getItem("rayleigh"))
        setRotation(parseFloat(sessionStorage.getItem("rotation")))
      }} 
      activeTab={activeTab}
    />
    <Footer />
    </>
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
  let motherShipPos
  if (window.innerWidth > 480) {
    motherShipPos = [15, 0, 0]
  } else {
    motherShipPos = [1, -8, 0]
  }

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  

  return (
    <Tabs onTabClick={onTabClick} activeTab={activeTab}>
      <Tab label={"home"} tabName={"HOME"}>
        <Titles title="ALNITAK" />
        <ThreeScene onMouseMove={onMouseMove}>
          {/* <color attach="background" args={['#000']} /> */}
          <Composition rotation={rotation} />
        </ThreeScene>
      </Tab>
      <Tab label={"tecnologies"} tabName={"TECNOLOGIAS "}>
        <Titles title="ALNITAK" />
        {/* <ThreeScene> //comment when rendering TechnologiesCanvas2 */}
        <TechnologiesCanvas2 />
        {/* </ThreeScene> */}
      </Tab>
      <Tab label={"solutions"} tabName={"SOLUCIONES"}>
        <div className={classes.ctn}>
          <Titles title="ALNITAK" subtitle="SOLUCIONES" />
          <div className={classes.solutionsCtn}>
            <div className={classes.solutionsBox}>
              <Paper orientation="right">
                <div className={classes.paperContent}>
                  <h3>LANDING</h3>
                  <div>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Quos blanditiis tenetur unde suscipit, quam beatae
                    rerum inventore consectetur, neque doloribus, cupiditate
                    numquam dignissimos laborum fugiat deleniti? Eum quasi
                    quidem quibusdam.
                  </div>
                  <ThreeScene>
                    <Model3
                      rotation={[0, -Math.PI / 2, -Math.PI / 6]}
                      scale={0.8}
                    />
                    <hemisphereLight
                      skycolor={new THREE.Color(0xc4ff00)}
                      groundColor={new THREE.Color(0xc4ff00)}
                      intensity={1}
                      position={[0, 100, 10]}
                    />
                    <OrbitControls enableZoom={false} autoRotate />
                  </ThreeScene>
                </div>
              </Paper>
            </div>
            <div className={classes.solutionsBox}>
              <Paper orientation="right">
                <div className={classes.paperContent}>
                  <h3>SITIO WEB</h3>
                  <div>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Quos blanditiis tenetur unde suscipit, quam beatae
                    rerum inventore consectetur, neque doloribus, cupiditate
                    numquam dignissimos laborum fugiat deleniti? Eum quasi
                    quidem quibusdam.
                  </div>
                  <ThreeScene>
                    <Model4
                      rotation={[0, -Math.PI / 2, -Math.PI / 6]}
                      scale={25}
                    />
                    <hemisphereLight
                      skycolor={new THREE.Color(0x0380ff)}
                      groundColor={new THREE.Color(0x0380ff)}
                      intensity={2}
                      position={[0, 100, 10]}
                    />
                    <OrbitControls enableZoom={false} autoRotate />
                  </ThreeScene>
                </div>
              </Paper>
            </div>
            <div className={classes.solutionsBox}>
              <Paper orientation="right">
                <div className={classes.paperContent}>
                  <h3>WEB-APP</h3>
                  <div>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Quos blanditiis tenetur unde suscipit, quam beatae
                    rerum inventore consectetur, neque doloribus, cupiditate
                    numquam dignissimos laborum fugiat deleniti? Eum quasi
                    quidem quibusdam.
                  </div>
                  <ThreeScene>
                    <Model5
                      rotation={[0, -Math.PI / 2, -Math.PI / 6]}
                      scale={30}
                    />
                    <hemisphereLight
                      skycolor={new THREE.Color(0xd00dff)}
                      groundColor={new THREE.Color(0xd00dff)}
                      intensity={1.5}
                      position={[0, 100, 10]}
                    />
                    <OrbitControls enableZoom={false} autoRotate />
                  </ThreeScene>
                </div>
              </Paper>
            </div>
          </div>
        </div>
      </Tab>

      {/* <Tab label={"portfolio"} tabName={"PORTAFOLIO"}>
        <p>Cuando haya...</p>
      </Tab> */}
      <Tab label={"us"} tabName={"NOSOTROS"}>
        <div className={classes.ctn}>
          <Titles title="ALNITAK" subtitle="NOSOTROS" />
          <div className={classes.usCtn}>
            <div className={classes.usIcons}>
              <ul>
                <li>
                  <div>
                    <img width={window.innerWidth > 480 ? "135": "95"} src={innovation} />
                    <h3>Innovación</h3>
                  </div>
                </li>
                <li>
                  <div>
                    <img width={window.innerWidth > 480 ? "115": "80"} src={design} />
                    <h3>Diseño</h3>
                  </div>
                </li>
                <li>
                  <div>
                    <img width={window.innerWidth > 480 ? "100": "75"} src={creativity} />
                    <h3>Creatividad</h3>
                  </div>
                </li>
                <li>
                  <div>
                    <img width={window.innerWidth > 480 ? "95": "75"} src={technology} />
                    <h3>Tecnología</h3>
                  </div>
                </li>
              </ul>
            </div>
            <div className={classes.moto} style={{ marginBottom: "3rem", marginTop: window.innerWidth > 480 ? "2rem": "8rem", textAlign: "center" }}>
              <div>
                Buscamos que el crecimiento web de nuestros clientes sea
                vertical, no sólo horizontal.
              </div>
            </div>
            <div className={classes.usBox}>
              <Paper orientation="left">
                <div style={{fontSize: '18px', padding: window.innerWidth > 480 ? "2rem": "0rem"}}>
                  Contamos con profesionales en distintas áreas para un
                  desarrollo eficaz y brindar servicios end to end. Nuestro
                  equipo multidisciplinario acompaña en el diseño del sitio y
                  creación de contenidos más adaptables a cada cliente.
                  Transformamos ideas en procesos creativos digitales.
                </div>
              </Paper>
            </div>
          </div>
        </div>
      </Tab>
      <Tab label={"contact"} tabName={"CONTACTO"}>
        
        <Titles title="ALNITAK" subtitle="CONTÁCTANOS" />
        <div
          className={classes.getInTouchContainer}
        > 
          <GetInTouch2 />
        </div>
        <ThreeScene>
          <group scale={3}>
            <Model2
              rotation={[0, -Math.PI / 3, -Math.PI / 6]}
              position={motherShipPos}
            />
            <hemisphereLight
              skycolor={new THREE.Color(0xffd403)}
              groundColor={new THREE.Color(0xffd403)}
              intensity={1}
              position={[0, 100, 10]}
            />
          </group>
          {/* <OrbitControls enableZoom={false} /> */}
        </ThreeScene>
      </Tab>
    </Tabs>
  );
}

function Composition({ props, rotation }) {
  // const scroll = useScroll()
  const [ref, alnitak, s2, s3, t1, s4, s5, s6, s7, s8, lines] = useRefs();
  // useFrame(() => {
  //   const r1 = scroll.range(1 / 10 , 1 / 10 )
  //   const r2 = scroll.range(1 / 10 , 1 / 4)
  //   const r3 = scroll.range(1 / 4, 1 / 2)
  //   const r4 = scroll.range(1 / 10 , 1 / 11)
  //   const r5 = scroll.range(1/2, 7/13)
  //   const r6 = scroll.visible(7/14, 1 / 1)
  //   const r7 = scroll.visible(99/100, 1 / 1)
  //   // ref.current.rotation.y = Math.PI - (Math.PI / 1)  + r1 * 12.2
  //   // ref.current.position.x = r2 * 50

  //   alnitak.current.scale.x = alnitak.current.scale.y = alnitak.current.scale.z = 1 + r1 * .5
  //   s2.current.scale.x = s2.current.scale.y = s2.current.scale.z =  r2 * 1
  //   s3.current.scale.x = s3.current.scale.y = s3.current.scale.z =  r3 * 1
  //   t1.current.scale.x = t1.current.scale.y = t1.current.scale.z = 1 * r4
  //   ref.current.scale.x = ref.current.scale.y = ref.current.scale.z = 1 + r5 * -.3
  //   s4.current.scale.x = s4.current.scale.y = s4.current.scale.z = r6 * 1.5
  //   s5.current.scale.x = s5.current.scale.y = s5.current.scale.z = r6 * 1.5
  //   s6.current.scale.x = s6.current.scale.y = s6.current.scale.z = r6 * 1.5
  //   s7.current.scale.x = s7.current.scale.y = s7.current.scale.z = r6 * 1.5
  //   s8.current.scale.x = s8.current.scale.y = s8.current.scale.z = r6 * 1.5
  //   lines.current.scale.x =lines.current.scale.y = lines.current.scale.z = r7

  // })
  let orionPos, orionScale, textPos;
  if (window.innerWidth > 480) {
    orionPos = [-40, 0, 0];
    orionScale = 1;
    textPos = [15, 25, 0];
  } else {
    orionPos = [0, 25, 0];
    orionScale = 0.5;
    textPos = [-17, 0, 0];
  }

  // function Bloom({ children }) {
  //   const { gl, camera, size } = useThree();
  //   const ref = useState();
  //   const composer = useRef();
  //   const aspect = useMemo(() => new THREE.Vector2(size.width, size.height), [
  //     size
  //   ]);
  //   useEffect(
  //     () => void ref.current && composer.current.setSize(size.width, size.height),
  //     [size]
  //   );
  //   useFrame(() => ref.current && composer.current.render(), 1);
  //   return (
  //     <>
  //       <scene ref={ref}>{children}</scene>
  //       <EffectComposer ref={composer} args={[gl]}>
  //         <RenderPass attachArray="passes" scene={ref.current} camera={camera} />
  //         <UnrealBloomPass attachArray="passes" args={[aspect, 1.5, 1, 0]} />
  //       </EffectComposer>
  //     </>
  //   );
  // }

  return (
    <group>
      <Suspense fallback={null}>
        <group
          scale={orionScale}
          rotation={rotation}
          position={orionPos}
          ref={ref}
          {...props}
        >
         
          <Model
            ref={s2}
            material={
              new THREE.MeshPhongMaterial({
                color: new THREE.Color(0xFFE927),
                shininess: 10,
              })
            }
            scale={0.005}
          />
          <Model
            ref={s3}
            material={
              new THREE.MeshPhongMaterial({
                color: new THREE.Color(0xFFE927),
                shininess: 10,
              })
            }
            scale={0.005}
            position={[22, 2, 0]}
          />
          <Model
            ref={alnitak}
            material={
              new THREE.MeshPhongMaterial({
                color: new THREE.Color(0x00FFE4),
                shininess: 10,
              })
            }
            scale={0.007}
            position={[-18, -2, 0]}
          />
          {/* <Text
            ref={t1}
            color={"white"}
            fontSize={2}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            position={[-18, 13, 0]}
          >
            Alnitak
          </Text> */}
          <Model
            ref={s4}
            material={
              new THREE.MeshPhongMaterial({
                color: new THREE.Color(0xFFE927),
                shininess: 10,
              })
            }
            scale={0.002}
            position={[-30, 30, 0]}
          />
          <Model
            ref={s5}
            material={
              new THREE.MeshPhongMaterial({
                color: new THREE.Color(0xFFE927),
                shininess: 10,
              })
            }
            scale={0.002}
            position={[-6, 44, 0]}
          />
          <Model
            ref={s6}
            material={
              new THREE.MeshPhongMaterial({
                color: new THREE.Color(0xFFE927),
                shininess: 10,
              })
            }
            scale={0.002}
            position={[30, 31, 0]}
          />
          <Model
            ref={s7}
            material={
              new THREE.MeshPhongMaterial({
                color: new THREE.Color(0xFFE927),
                shininess: 10,
              })
            }
            scale={0.002}
            position={[-30, -45, 0]}
          />
          <Model
            ref={s8}
            material={
              new THREE.MeshPhongMaterial({
                color: new THREE.Color(0xFFE927),
                shininess: 10,
              })
            }
            scale={0.002}
            position={[31, -38, 0]}
          />
          <group ref={lines}>
            <Line
              points={[
                [0, 0, 0],
                [22, 2, 0],
              ]}
              color="white"
              lineWidth={0.5}
              dashed={true}
            />
            <Line
              points={[
                [0, 0, 0],
                [-12, -2, 0],
              ]}
              color="white"
              lineWidth={0.5}
              dashed={true}
            />
            <Line
              points={[
                [-18, 0, 0],
                [-30, 28, 0],
              ]}
              color="white"
              lineWidth={0.5}
              dashed={true}
            />
            <Line
              points={[
                [-6, 44, 0],
                [-30, 30, 0],
              ]}
              color="white"
              lineWidth={0.5}
              dashed={true}
            />
            <Line
              points={[
                [-3, 44, 0],
                [30, 32, 0],
              ]}
              color="white"
              lineWidth={0.5}
              dashed={true}
            />
            <Line
              points={[
                [30, 32, 0],
                [21, 2, 0],
              ]}
              color="white"
              lineWidth={0.5}
              dashed={true}
            />
            <Line
              points={[
                [21, 2, 0],
                [31, -38, 0],
              ]}
              color="white"
              lineWidth={0.5}
              dashed={true}
            />
            <Line
              points={[
                [31, -38, 0],
                [-30, -45, 0],
              ]}
              color="white"
              lineWidth={0.5}
              dashed={true}
            />
            <Line
              points={[
                [-30, -45, 0],
                [-18, 0, 0],
              ]}
              color="white"
              lineWidth={0.5}
              dashed={true}
            />
          </group>
        </group>
      </Suspense>
      <hemisphereLight
        skycolor={new THREE.Color(0xe6ce4a)}
        groundColor={new THREE.Color(0xe6ce4a)}
        intensity={0.65}
        position={[0, 100, 10]}
      />
      <Html
        position={textPos}
        zIndexRange={[-0, -0]}
        occlude={false}
        style={{ width: window.innerWidth > 480 ? "350px" : "290px" }}
      >
        <h1>¿Te imaginas todo lo que podríamos hacer juntos?</h1>
        <p>
          Somos una desarrolladora multidisciplinaria de sitios web. Nuestro
          enfoque es dar soluciones digitales creativas e innovadoras que
          conecten a las marcas con sus clientes. Trabajamos en tecnologías de
          frontend y backend.
        </p>
      </Html>
    </group>
  );
}

// function TechnologiesCanvas() {
//   const [hoveredSatar1, setHoverSatar1] = useState(false);
//   const [hoveredSatar2, setHoverSatar2] = useState(false);
//   const [hoveredSatar3, setHoverSatar3] = useState(false);
//   // const []
//   if (window.innerWidth < 480) {
//     return (
//       <group>
//         <group position={[-10, 40, 0]}>
//           <Html position={[1, 7, 0]} style={{ width: "235px" }}>
//             <h2 style={{ fontSize: "17px" }}>Sitios inmersivos en 3D</h2>
//             <p style={{ fontSize: "13px" }}>
//               Haz que tus clientes interactúen con tu marca.
//             </p>
//             <p style={{ fontSize: "13px" }}>
//               Brinda profundidad y data en un solo lugar. Tus clientes vivirán
//               una experiencia inmersiva cada que visiten tu sitio. Sé parte del
//               metaverso.
//             </p>
//           </Html>
//           <Model
//             position={[-3, 0, 0]}
//             scale={0.0025}
//             material={
//               new THREE.MeshStandardMaterial({
//                 color: new THREE.Color(0xe6cc51),
//               })
//             }
//           />
//         </group>
//         <group position={[-10, 15, 0]}>
//           <Html
//             position={[1, 7, 0]}
//             zIndexRange={[-0, -0]}
//             style={{ width: "235px" }}
//           >
//             <h2 style={{ fontSize: "17px" }}>Visualización de datos</h2>
//             <p style={{ fontSize: "13px" }}>Transmitimos ideas con imágenes.</p>
//             <p style={{ fontSize: "13px" }}>
//               Tus usuarios te conocerán de una manera más fácil y productivas.
//             </p>
//           </Html>
//           <Model
//             position={[-3, 0, 0]}
//             scale={0.0025}
//             material={
//               new THREE.MeshStandardMaterial({
//                 color: new THREE.Color(0xe6cc51),
//               })
//             }
//           />
//         </group>
//         <group position={[-10, -5, 0]}>
//           <Html
//             position={[1, 7, 0]}
//             zIndexRange={[-0, -0]}
//             style={{ width: "235px" }}
//           >
//             <h2 style={{ fontSize: "17px" }}>Formularios dinámicos</h2>
//             <p style={{ fontSize: "13px" }}>
//               Obtén data de una manera sencilla y divertida.
//             </p>
//             <p style={{ fontSize: "13px" }}>
//               Con nuestros formularios dinámicos puede obtener la
//               retroalimentación que esperas, mientras tus usuarios exploran de
//               una manera creativa e ingeniosa cómo depositar su información.
//             </p>
//           </Html>
//           <Model
//             position={[-3, 0, 0]}
//             scale={0.0025}
//             material={
//               new THREE.MeshStandardMaterial({
//                 color: new THREE.Color(0xe6cc51),
//               })
//             }
//           />
//         </group>
//         <hemisphereLight
//           skycolor={new THREE.Color(0xe6ce4a)}
//           groundColor={new THREE.Color(0xe6ce4a)}
//           intensity={
//             hoveredSatar1 || hoveredSatar2 || hoveredSatar3 ? 0.0 : 0.65
//           }
//           position={[0, 100, 10]}
//         />
//       </group>
//     );
//   }
//   return (
//     <group scale={0.9}>
//       <Model
//         onClick={() => setHoverSatar1(true)}
//         onPointerOver={() => setHoverSatar1(true)}
//         onPointerOut={() => setHoverSatar1(false)}
//         material={
//           hoveredSatar2 || hoveredSatar3
//             ? new THREE.MeshStandardMaterial({
//                 color: new THREE.Color(0xe6cc51),
//                 metalness: 1,
//               })
//             : new THREE.MeshStandardMaterial({
//                 color: new THREE.Color(0xe6cc51),
//               })
//         }
//         scale={hoveredSatar1 ? 0.025 : 0.02}
//         position={[-50, 0, 0]}
//       />
//       <Html position={[-80, 20, 0]}>
//         <h2>Sitios inmersivos en 3D</h2>
//       </Html>
//       {hoveredSatar1 && (
//         <group>
//           <Html position={[-45, 0, 0]}>
//             <div
//               style={{
//                 width: "300px",
//                 backgroundColor: "rgba(0, 0, 0, 0.8)",
//                 padding: "30px",
//                 borderRadius: "30px 0 0 0",
//               }}
//             >
//               <p>Haz que tus clientes interactúen con tu marca.</p>
//               <p>
//                 Brinda profundidad y data en un solo lugar. Tus clientes vivirán
//                 una experiencia inmersiva cada que visiten tu sitio. Sé parte
//                 del metaverso.
//               </p>
//             </div>
//           </Html>

//           <pointLight color="#e6cc51" intensity={1} position={[-45, 0, 10]} />
//           <pointLight color="#e6cc51" intensity={1} position={[45, 0, 10]} />
//         </group>
//       )}
//       <Line
//         points={[
//           [-50, 0, 0],
//           [0, 5, 0],
//         ]}
//         color="white"
//         lineWidth={0.5}
//         dashed={true}
//       />
//       <Model
//         onPointerOver={() => setHoverSatar2(true)}
//         onPointerOut={() => setHoverSatar2(false)}
//         material={
//           hoveredSatar1 || hoveredSatar3
//             ? new THREE.MeshStandardMaterial({
//                 color: new THREE.Color(0xffffff),
//                 metalness: 1,
//               })
//             : new THREE.MeshStandardMaterial({
//                 color: new THREE.Color(0xffffff),
//               })
//         }
//         scale={hoveredSatar2 ? 0.02 : 0.015}
//         position={[0, 5, 0]}
//       />
//       <Html position={[-30, 25, 0]}>
//         <h2>Visualización de datos</h2>
//       </Html>
//       {hoveredSatar2 && (
//         <group>
//           <Html position={[5, 5, 0]}>
//             <div
//               style={{
//                 width: "300px",
//                 backgroundColor: "rgba(0, 0, 0, 0.8)",
//                 padding: "30px",
//                 borderRadius: "30px 0 0 0",
//               }}
//             >
//               <p>Transmitimos ideas con imágenes.</p>
//               <p>
//                 Tus usuarios te conocerán de una manera más fácil y productivas.
//               </p>
//             </div>
//           </Html>
//           <pointLight intensity={1} position={[0, 5, 10]} />
//         </group>
//       )}
//       <Line
//         points={[
//           [0, 5, 0],
//           [50, 10, 0],
//         ]}
//         color="white"
//         lineWidth={0.5}
//         dashed={true}
//       />
//       <Model
//         onPointerOver={() => setHoverSatar3(true)}
//         onPointerOut={() => setHoverSatar3(false)}
//         material={
//           hoveredSatar2 || hoveredSatar1
//             ? new THREE.MeshStandardMaterial({
//                 color: new THREE.Color(0xe6cc51),
//                 metalness: 1,
//               })
//             : new THREE.MeshStandardMaterial({
//                 color: new THREE.Color(0xe6cc51),
//               })
//         }
//         scale={hoveredSatar3 ? 0.02 : 0.015}
//         position={[50, 10, 0]}
//       />
//       <Html position={[20, 30, 0]}>
//         <h2>Formularios dinámicos</h2>
//       </Html>
//       {hoveredSatar3 && (
//         <group>
//           <Html position={[45, 0, 0]}>
//             <div
//               style={{
//                 width: "300px",
//                 backgroundColor: "rgba(0, 0, 0, 0.8)",
//                 padding: "30px",
//                 borderRadius: "30px 0 0 0",
//               }}
//             >
//               <p>Obtén data de una manera sencilla y divertida.</p>
//               <p>
//                 Con nuestros formularios dinámicos puede obtener la
//                 retroalimentación que esperas, mientras tus usuarios exploran de
//                 una manera creativa e ingeniosa cómo depositar su información.
//               </p>
//             </div>
//           </Html>

//           <pointLight color="#e6cc51" intensity={1} position={[-45, 0, 10]} />
//           <pointLight color="#e6cc51" intensity={1} position={[45, 0, 10]} />
//         </group>
//       )}
//       <hemisphereLight
//         skycolor={new THREE.Color(0xe6ce4a)}
//         groundColor={new THREE.Color(0xe6ce4a)}
//         intensity={hoveredSatar1 || hoveredSatar2 || hoveredSatar3 ? 0.0 : 0.65}
//         position={[0, 100, 10]}
//       />
//     </group>
//   );
// }

function TechnologiesCanvas2() {
  let canvasPos,
    canvasScale,
    camLookAtx,
    camLookAty,
    camLookAtz,
    zoomX,
    zoomY,
    zoomZ,
    techDescrX,
    techDescrY,
    techDescrZ;

  if (window.innerWidth > 480) {
    canvasPos = [0, 0, 0];
    canvasScale = 0.6;
  } else {
    canvasPos = [1, 2, 0];
    canvasScale = 0.25;
  }

  function Moment({ data, position, zoomToView }) {
    const meshRef = useRef();
    const textRef = useRef();

    const [hover, setHover] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
      document.body.style.cursor = hover ? "pointer" : "grab";
    }, [hover]);

    useLayoutEffect(() => {
      meshRef.current.position.x = data.position[0];
      meshRef.current.position.y = data.position[1];
      meshRef.current.position.z = data.position[2];
    });

    return (
      <group>
        <Model
          ref={meshRef}
          onPointerOver={() => {
            if (clicked === false) {
              setClicked(false);
            }
            setHover(true);
          }}
          onPointerOut={() => {
            setHover(false);
          }}
          onClick={() => {
            zoomToView(meshRef);
            if (hover) {
              setClicked(true);
            } else if (!hover) {
              setClicked(false);
            }
          }}
          material={data.material}
          scale={data.scale}
          // rotation={[0,0,0]}
        />
      </group>
    );
  }

  function Cloud({ momentsData }) {
    const [zoom, setZoom] = useState(false);
    const [focus, setFocus] = useState(true);
    const [onFocus, setOnFocus] = useState();
    const vec = new THREE.Vector3();

    useFrame((state) => {
      const step = 0.05;

      /*
      Need to find some way to lerp the lookAt
      */

      zoom
        ? vec.set(focus.x + zoomX, focus.y + zoomY, focus.z + zoomZ)
        : vec.set(0, 0, 15);
      //
      state.camera.position.lerp(vec, step);
      state.camera.lookAt(camLookAtx, camLookAty, camLookAtz);
      // Update to new position/lookAt
      state.camera.updateProjectionMatrix();
    });

    // controls.setLookAt( positionX, positionY, positionZ, targetX, targetY, targetZ, true)

    const zoomToView = (focusRef) => {
      setOnFocus(focusRef.current.position.x);
      console.log(focusRef.current.position);
      setZoom(!zoom);
      if (!zoom) {
        setFocus(focusRef.current.position);
      }
    };

    if (window.innerWidth > 480) {
      camLookAtx = 2;
      camLookAty = -6;
      camLookAtz = -10;
      zoomX = 0;
      zoomY = 3;
      zoomZ = 4;
      techDescrX = 0.5;
      techDescrY = 1;
      techDescrZ = 0;
    } else {
      camLookAtx = 1;
      camLookAty = -5;
      camLookAtz = 0;

      if (onFocus === 8.5) {
        zoomX = 3;
        zoomY = 5;
        zoomZ = 4;
        techDescrX = -4;
        techDescrY = 0;
        techDescrZ = 0;
      } else if (onFocus === 0) {
        zoomX = -4;
        zoomY = 10;
        zoomZ = 5;
        techDescrX = 2;
        techDescrY = 0;
        techDescrZ = 0;
      } else if (onFocus === -8.5) {
        zoomX = -3;
        zoomY = 5;
        zoomZ = 5;
        techDescrX = 0;
        techDescrY = 0;
        techDescrZ = 0;
      }
    }
    console.log(onFocus);

    return (
      <instancedMesh>
        {momentsData.map((moment, i) => {
          // Set position here so it isn't reset on state change
          // for individual moment.
          return (
            <group>
              <Moment key={i} data={moment} zoomToView={zoomToView} />
              {/* {console.log(moment.position[0]===onFocus)} */}
              {console.log(onFocus)}
              {zoom && moment.position[0] === onFocus ? (
                <Html
                  className={classes.techDescr}
                  position={[
                    moment.position[0] + techDescrX,
                    moment.position[1] + techDescrY,
                    moment.position[2] + techDescrZ,
                  ]}
                >
                  <p>{moment.text}</p>
                  <p>{moment.text2}</p>
                  {/* <Link to={"/visualizacion_de_datos"}>hipervínculo</Link>  */}    

                </Html>
              ) : (
                ""
              )}
            </group>
          );
        })}
      </instancedMesh>
    );
  }

  const momentsArray = [
    {
      position: [-8.5, -8, 0],
      scale: 0.0025,
      material: new THREE.MeshPhongMaterial({
        color: new THREE.Color(0xFFE927),
      }),
      y: 6,
      x: 0,
      title: "Visualización de datos",
      text: "Transmitimos ideas con imágenes.",
      text2: "Tus usuarios te conocerán de una manera más fácil y productivas.",
      link: "/visualizacion_de_datos"
    },
    {
      position: [0, -5.5, 0],
      scale: 0.0023,
      material: new THREE.MeshPhongMaterial({
        color: new THREE.Color(0xFFE927),
      }),
      y: 10,
      x: 0,
      title: "Sitios inmersivos en 3D",
      text: "Haz que tus clientes interactúen con tu marca.",
      text2:
        "Brinda profundidad y data en un solo lugar. Tus clientes vivirán una experiencia inmersiva cada que visiten tu sitio. Sé parte del metaverso.",
    },
    {
      position: [8.5, -5.5, 0],
      scale: 0.0023,
      material: new THREE.MeshPhongMaterial({
        color: new THREE.Color(0xFFE927),
      }),
      y: 10,
      x: -10,
      title: "Formularios dinámicos",
      text: "Obtén data de una manera sencilla y divertida.",
      text2:
        "Con nuestros formularios dinámicos puede obtener la retroalimentación que esperas, mientras tus usuarios exploran de una manera creativa e ingeniosa cómo depositar su información.",
    },
    // {position: [-8, 3, 0], scale: 0.00045, material:new THREE.MeshPhongMaterial({color: new THREE.Color(0xffffff)}), y:2.5, title:'Hola4'},
    // {position: [0, 5.5, 0], scale: 0.00045, material:new THREE.MeshPhongMaterial({color: new THREE.Color(0xe6ce4a)}), y:2.5, title:'Hola5'},
    // {position: [8.5, 5.5, 0], scale: 0.00045, material:new THREE.MeshPhongMaterial({color: new THREE.Color(0xffffff)}), y:2.5, title:'Hola6'},
    // {position: [12, -15, 0], scale: 0.00095, material:new THREE.MeshPhongMaterial({color: new THREE.Color(0xffffff)}), y:2.5, title:'Hola7'},
    // {position: [-12, -15, 0], scale: 0.00095, material:new THREE.MeshPhongMaterial({color: new THREE.Color(0xffffff)}), y:2.5, title:'Hola8'},
  ];

  return (
    <Canvas>
      <group position={canvasPos} scale={canvasScale}>
        <hemisphereLight
          skycolor={new THREE.Color(0xe6ce4a)}
          groundColor={new THREE.Color(0xe6ce4a)}
          intensity={1}
          position={[0, 100, 10]}
        />
        <Cloud momentsData={momentsArray} />
        <Model
          material={
            new THREE.MeshPhongMaterial({
              color: new THREE.Color(0xC4FF00),
              shininess: 10,
            })
          }
          scale={0.001}
          position={[-11.5, 3, 0]}
        />
  
        <Text
          color={"white"}
          fontSize={0.6}
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          position={[-6.5, -5, 0]}
        >
          {`Visualización\n de datos`}
        </Text>
        <Model
          material={
            new THREE.MeshPhongMaterial({
              color: new THREE.Color(0xC4FF00),
              shininess: 10,
            })
          }
          scale={0.001}
          position={[0, 8.3, 0]}
        />
       
        <Text
          color={"white"}
          fontSize={0.6}
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          position={[3, -3.5, 0]}
        >
          {`Sitios inmersivos\n en 3D`}
        </Text>
        <Model
          material={
            new THREE.MeshPhongMaterial({
              color: new THREE.Color(0xC4FF00),
              shininess: 10,
            })
          }
          scale={0.001}
          position={[11, 5, 0]}
        />
        <Text
          color={"white"}
          fontSize={0.6}
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          position={[11, -3.5, 0]}
        >
          {`Formularios\ndinámicos`}
        </Text>
        <Model
          material={
            new THREE.MeshPhongMaterial({
              color: new THREE.Color(0xC4FF00),
              shininess: 10,
            })
          }
          scale={0.0013}
          position={[-14, -23, 0]}
        />
        <Model
          material={
            new THREE.MeshPhongMaterial({
              color: new THREE.Color(0xC4FF00),
              shininess: 10,
            })
          }
          scale={0.0013}
          position={[13, -23, 0]}
        />
       
        <OrbitControls enableZoom={false} />
      </group>
    </Canvas>
  );
}
