
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
                    style={{width:'300px', padding:'30px', backgroundColor:'rgba(0,0,0,.8)'}}
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
        title: "Sitios inmersivos en 3D",
        text: "Haz que tus clientes interactúen con tu marca.",
        text2:
          "Brinda profundidad y data en un solo lugar. Tus clientes vivirán una \
          experiencia inmersiva cada que visiten tu sitio. Sé parte del metaverso.",
      },
      {
        position: [0, -9, 0],
        scale: 0.002,
        material: new THREE.MeshPhongMaterial({
          color: new THREE.Color(0xffe927),
        }),
        y: 10,
        x: 0,
        title: "Visualización de datos",
        text: "Transmitimos ideas con imágenes.",
        text2: "Tus usuarios te conocerán de una manera más fácil y productivas.",
        link: "/visualizacion_de_datos",
      },
      {
        position: [8, -8, 0],
        scale: 0.002,
        material: new THREE.MeshPhongMaterial({
          color: new THREE.Color(0xffe927),
        }),
        y: 10,
        x: -10,
        title: "Formularios dinámicos",
        text: "Obtén data de una manera sencilla y divertida.",
        text2:
          "Con nuestros formularios dinámicos puede obtener la retroalimentación\
          que esperas, mientras tus usuarios exploran de una manera creativa e \
          ingeniosa cómo depositar su información.",
      },
      {
        position: [-12.8, 2.8, 0],
        scale: 0.001,
        material: new THREE.MeshPhongMaterial({
          color: new THREE.Color(0xc4ff00),
        }),
        y: 2.5,
        title: "API’s & Webhooks",
        text: "Las bases de datos requieren un distribuidor de datos que lo haga\
          de forma ordenada y que eviten errores de almacenamiento.",
        text2:
          "Un API se encarga de ordenar y entregar la información necesaria\
          a quien la pida. Por otro lado, los webhooks son los encargados de notificar\
          una acción en una aplicación o sitio web.",
      },
      {
        position: [-2.5, 9, 0],
        scale: 0.001,
        material: new THREE.MeshPhongMaterial({
          color: new THREE.Color(0xc4ff00),
        }),
        y: 2.5,
        title: "Integración y soporte de aplicaciones de terceros",
        text: "Existe un universo de aplicaciones con las cuáles es posible conectar \
          un servicio ya existente. ",
        text2:
          "Por ejemplo, una tienda en línea puede conectarse con Hubspot\
          para guardar datos de sus leads; después se conecta con Gmail \
          o MailChimp para generar campañas publicitarias; al final se obtendría \
          una hoja de cálculo con esa lista de contactados y usuarios que \
          interactuaron con la campaña. En Alnitak generamos tanto la integración \
          como el soporte con estas herramientas.",
      },
      {
        position: [11.5, 4, 0],
        scale: 0.001,
        material: new THREE.MeshPhongMaterial({
          color: new THREE.Color(0xc4ff00),
        }),
        y: 2.5,
        title: "Arquitectura en la nube",
        text: "Con nosotros todo está a salvo.",
        text2:
          "Todas nuestras tecnologías requieren que sean desplegadas en sintonía y que sean\
          accesibles para cualquier usuario en el mundo. Para esto existen distintas \
          empresas que brindan servicios de alojamiento en la nube en las cuales puedas \
          interactuar entre aplicaciones, sitios web, APIs, bases de datos, etc. En \
          Alnitak usamos AWS, Azure, Google Cloud, entre otras empresas, para alojar \
          contenido e interactuar con él.",
      },
      {
        position: [11.5, -24, 0],
        scale: 0.0015,
        material: new THREE.MeshPhongMaterial({
          color: new THREE.Color(0xc4ff00),
        }),
        y: 2.5,
      },
      {
        position: [-12.5, -27, 0],
        scale: 0.0015,
        material: new THREE.MeshPhongMaterial({
          color: new THREE.Color(0xc4ff00),
        }),
        y: 2.5,
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
            position={[-5, -7, 0]}
            textAlign="center"
          >
            {`Sitios inmersivos\n en 3D`}
          </Text>
          <Text
            color={"white"}
            fontSize={.8}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            position={[3, -7, 0]}
            textAlign="center"
          >
            {`Visualización\n de datos`}
          </Text>
          <Text
            color={"white"}
            fontSize={.8}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            position={[11.5, -6, 0]}
            textAlign="center"
          >
            {`Formularios\ndinámicos`}
          </Text>
          <Text
            color={"white"}
            fontSize={.8}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            position={[-10, 4.6, 0]}
            textAlign="center"
          >
            {`API’s & \nWebhooks`}
          </Text>
          <Text
            color={"white"}
            fontSize={.8}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            position={[2.5, 11, 0]}
            textAlign="center"
          >
            {`Integración y soporte \nde aplicaciones de terceros`}
          </Text>
          <Text
            color={"white"}
            fontSize={.8}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            position={[11, 6, 0]}
            textAlign="center"
          >
            {`Arquitectura \nen la nube`}
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