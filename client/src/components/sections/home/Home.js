
import Titles from "../../data_display/Titles";
import ThreeScene from "../../ThreeScene";
import Model from "../../Star";

//React
import { Suspense } from "react";
import useRefs from "react-use-refs";

//Three
import * as THREE from "three";
import {
    Html
  } from "@react-three/drei";

//CSS
import classes from "./Home.module.css";



function Composition(props) {

    const [ref, alnitak, s2, s3, t1, s4, s5, s6, s7, s8, lines] = useRefs();
  
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
  
    return (
      <group>
        <Suspense fallback={null}>
          <group
            scale={orionScale}
            rotation={props.rotation}
            position={orionPos}
            ref={ref}
            {...props}
          >
            
            <Model
              ref={alnitak}
              material={
                new THREE.MeshPhongMaterial({
                  color: new THREE.Color(0x00ffe4),
                  shininess: 1,
                })
              }
              scale={0.025}
              position={[0, 0, 0]}
            />
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
            Somos una desarrolladora multidisciplinaria de software y soluciones TI. Nuestro
            enfoque es dar soluciones digitales creativas e innovadoras que
            conecten a las marcas con sus clientes. Trabajamos en tecnologías de
            frontend y backend.
          </p>
        </Html>
      </group>
    );
  }

  const Home = (props) => {
    return (
        <div style={
            {
                width: "100%",
                height: "100%",
            }
        }>
            <Titles title="ALNITAK" />
            <ThreeScene>
                <Composition rotation={props.rotation} />
            </ThreeScene>
        </div>
    )
}

export default Home