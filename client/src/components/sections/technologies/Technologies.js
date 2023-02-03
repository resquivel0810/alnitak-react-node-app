
import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect
} from "react";
import * as THREE from "three";

import Model from "../../Star";

import {
  OrbitControls,
  Text,
  Line,
  Html
} from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";

//CSS
import classes from "./Technologies.module.css";

const TechnologiesCanvas = () => {
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
      const [onFocus, setOnFocus] = useState('onfocus');
      const vec = new THREE.Vector3();
  
      useFrame((state) => {
        const step = 0.05;
  
        /*
        Need to find some way to lerp the lookAt
        */
  
        let focYCor, focXCor
        if (focus.y > 0) {
          focYCor = - Math.abs(focus.y)/8  
        } else {
          focYCor = Math.abs(focus.y)/2
        }
        if (focus.x >0) {
          focXCor = - Math.abs(focus.x)/4
        } else {
          focXCor = Math.abs(focus.x)/2
        }
  
        zoom
          ? vec.set(focus.x + focXCor , focus.y + focYCor  , focus.z + 5)
          : vec.set(0, -5, 17);
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
        camLookAtx = 0;
        camLookAty = -6;
        camLookAtz = -15;
        zoomX = 0;
        zoomY = 3;
        zoomZ = 4;
        techDescrX = 0.5;
        techDescrY = 1;
        techDescrZ = 0;
      } else {
        camLookAtx = 1;
        camLookAty = -7;
        camLookAtz = 0;
  
        if (onFocus === 8) {
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
                    style={{
                      width:'300px', 
                      paddingLeft:'15px', 
                      paddingTop:'10px',
                      backgroundColor:'rgba(0,0,0,.8)',
                      height: '250px',
                      overflowY: 'scroll',
                      paddingRight: '1rem'
                    }}
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
    //Dynamic stars args
    const momentsArray = [
      {
        position: [-8, -10, 0],
        scale: 0.0025,
        material: new THREE.MeshPhongMaterial({
          color: new THREE.Color(0x00ffe4),
        }),
        y: 6,
        x: 0,
        title: "Inteligencia \nArtificial",
        text: "",
        text2:
          "La IA y el aprendizaje automático están transformando la forma en que los programas se crean y se utilizan.Con estas tecnologías, los sistemas pueden aprender de los datos y realizar tareas complejas sin la intervención humana. Se espera que esto lleve a una mayor eficiencia y productividad en el desarrollo de software, así como a la creación de nuevas soluciones y aplicaciones.",
      },
      {
        position: [0, -9, 0],
        scale: 0.002,
        material: new THREE.MeshPhongMaterial({
          color: new THREE.Color(0xffe927),
        }),
        y: 10,
        x: 0,
        title: "Computación en \n la nube",
        text: "",
        text2: "La nube es un modelo de computación en el que los recursos y los servicios se entregan a través de Internet. Esto permite a los desarrolladores acceder a recursos de hardware y software potentes sin tener que preocuparse por la infraestructura subyacente. La computación en la nube está transformando la forma en que se desarrolla y se entrega el software, permitiendo una mayor escalabilidad y flexibilidad."
      },
      {
        position: [8, -8, 0],
        scale: 0.002,
        material: new THREE.MeshPhongMaterial({
          color: new THREE.Color(0xffe927),
        }),
        y: 10,
        x: -10,
        title: "Inmersión \n 3D",
        text: "",
        text2:
          "Los sitios web en 3D ofrecen una experiencia más inmersiva y realista para los usuarios. Estos sitios utilizan tecnologías como WebGL, Three.js y A-Frame para crear entornos en 3D interactivos y animaciones en tiempo real en el navegador. Esto permite a los desarrolladores crear experiencias más emocionantes y atractivas para los usuarios, como juegos en línea, modelos en 3D, presentaciones virtuales, etc. Los sitios web en 3D están transformando la forma en que los usuarios interactúan con la web y tienen el potencial de revolucionar la forma en que se entregan productos y servicios en línea.",
      },
      {
        position: [-12.8, 2.8, 0],
        scale: 0.001,
        material: new THREE.MeshPhongMaterial({
          color: new THREE.Color(0xc4ff00),
        }),
        y: 2.5,
        title: "Orquestación de \n contenedores",
        text: "",
        text2:
          "Los contenedores son una forma de empaquetar aplicaciones y sus dependencias en unidades aisladas que pueden ser ejecutadas en cualquier entorno. La orquestación de contenedores es una forma de gestionar y automatizar la ejecución de contenedores en un sistema distribuido. Estas tecnologías están transformando la forma en que se despliega y se administra el software, permitiendo una mayor portabilidad y escalabilidad.",
      },
      {
        position: [-2.5, 9, 0],
        scale: 0.001,
        material: new THREE.MeshPhongMaterial({
          color: new THREE.Color(0xc4ff00),
        }),
        y: 2.5,
        title: "BlockChain",
        text: "",
        text2:
          "BlockChain es una tecnología distribuida que permite a los usuarios realizar transacciones seguras y transparentes sin la necesidad de intermediarios. La seguridad en la nube es una forma de proteger los datos y los recursos en la nube. Estas tecnologías están transformando la forma en que se realizan transacciones y se protegen los datos en línea, y se espera que tengan un impacto significativo en el futuro del desarrollo de software",
      },
      {
        position: [11.5, 4, 0],
        scale: 0.001,
        material: new THREE.MeshPhongMaterial({
          color: new THREE.Color(0xc4ff00),
        }),
        y: 2.5,
        title: "Microservicios",
        text: "",
        text2:
          "Los microservicios son una forma de desarrollar aplicaciones como una colección de servicios pequeños y autónomos que interactúan entre sí. Esto permite a los equipos de desarrollo trabajar de manera más eficiente y flexible, y permite una mayor escalabilidad y flexibilidad. Con los microservicios, los errores en un servicio pueden ser detectados y solucionados sin afectar a los demás servicios, lo que aumenta la resiliencia y la disponibilidad de la aplicación.",
      },
      {
        position: [11.5, -24, 0],
        scale: 0.0015,
        material: new THREE.MeshPhongMaterial({
          color: new THREE.Color(0xc4ff00),
        }),
        y: 2.5,
        title: "DevOps y \n automatización",
        text: "",
        text2: "DevOps es una práctica que combina desarrollo de software y operaciones para mejorar la velocidad y eficiencia de la entrega de software. La automatización de la entrega de software es una parte importante de DevOps, y permite a los equipos automatizar tareas repetitivas y liberar recursos para enfocarse en tareas más importantes. Estas tecnologías están transformando la forma en que los equipos de desarrollo trabajan juntos, lo que aumenta la velocidad y la eficiencia en la entrega de software."
      },
      {
        position: [-12.5, -27, 0],
        scale: 0.0015,
        material: new THREE.MeshPhongMaterial({
          color: new THREE.Color(0xc4ff00),
        }),
        y: 2.5,
        title: "Progressive Web \n Applications (PWAs)",
        text: "",
        text2:"Las PWAs son aplicaciones web que funcionan como una aplicación nativa y proporcionan una experiencia de usuario similar a una aplicación móvil. PWAs son compatibles con múltiples plataformas, incluidas desktop, móvil y tablet, y se pueden usar sin conexión. Esto las hace ideales para aplicaciones que requieren una experiencia de usuario rápida y sin interrupciones, y también permite a los desarrolladores llegar a una audiencia más amplia. PWAs también son más fáciles de implementar y mantener que las aplicaciones nativas, lo que aumenta la eficiencia y reduce los costos de desarrollo. Con la adopción cada vez mayor de las PWAs, estas aplicaciones están transformando la forma en que los usuarios interactúan con las aplicaciones en línea."
      },
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
  
          <Text
            color={"white"}
            fontSize={.8}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            position={[-6, -6, 0]}
          >
            {momentsArray[0].title}
          </Text>
          <Text
            color={"white"}
            fontSize={.8}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            position={[3, -6, 0]}
            textAlign="center"
          >
            {momentsArray[1].title}
          </Text>
          <Text
            color={"white"}
            fontSize={.8}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            position={[10.5, -5.5, 0]}
            textAlign="center"
          >
            {momentsArray[2].title}
          </Text>
          <Text
            color={"white"}
            fontSize={.8}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            position={[-10, 5, 0]}
            textAlign="center"
          >
            {momentsArray[3].title}
          </Text>
          <Text
            color={"white"}
            fontSize={.8}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            position={[1, 10, 0]}
            textAlign="center"
          >
            {momentsArray[4].title}
          </Text>
          <Text
            color={"white"}
            fontSize={.8}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            position={[11, 6, 0]}
            textAlign="center"
          >
            {momentsArray[5].title}
          </Text>
          <Text
            color={"white"}
            fontSize={.8}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            position={[11, -22, 0]}
            textAlign="center"
          >
            {momentsArray[6].title}
          </Text>
          <Text
            color={"white"}
            fontSize={.8}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            position={[-12, -24, 0]}
            textAlign="center"
          >
            {momentsArray[7].title}
          </Text>
          
          {/* Constelation lines */}
          <group scale={0.4} position={[-.5, -9, 0]}>
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
          <OrbitControls enableZoom={false} />
        </group>
      </Canvas>
    );
  }
  
  export default TechnologiesCanvas;