import classes from "./PrivacyNotice.module.css";

import Chip from '@mui/material/Chip';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import * as THREE from "three";

import ThreeScene from "../../components/ThreeScene";

import Model3 from "../../components/LandingShip";
import Model4 from "../../components/WebpageShip";
import Model5 from "../../components/WebappShip";
import Footer from "../../components/layout/Footer";

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

  import React, {
    Suspense,
    useRef,
    useState,
    useEffect,
    useLayoutEffect,
    useMemo,
  } from "react";

  // import { useFrame, Canvas, useThree} from "@react-three/fiber";

export default function PrivacyNotice() {
    const ref = useRef();
    const [starCount, setStarCount] = useState(5000) 
    const [rayleigh, setRayleigh] = useState(1000)
    const [rotation, setRotation] = useState(0)
    const [offset, set] = useState(-40)

 
  
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    const handleClick = () => {
      alert('Aquí el código para regresar al home');
    };

    let textPos
    if (window.innerWidth > 480) {
      textPos = [-40, 40, 0]
    } else {
      textPos = [-3.5, 50, 0]
    }

  
    return (
      <>
     <Suspense fallback={null}>
      <ThreeScene ref={ref} className={classes.r3fCanvas}>
     
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
            xMov={.005}
            xRot={0.0001}
            yMov={.1}
          />
          <Model3
            scale={0.04} 
            position={[getRandomArbitrary(-100,-50), 15, 0]}
            rotation={[0,-Math.PI/2,0]}
            xMov={.005}
            xRot={0.005}
            yMov={.1}
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
            xMov={.005}
            xRot={0.00005}
            yMov={1}
          />
          <Model4
            scale={1.5} 
            position={[getRandomArbitrary(100,50), -10, 0]}
            rotation={[0,0,0]}
            xMov={.007}
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

          <Html zIndexRange={[0, 0]} position={textPos}>
            <section  className={classes.container}>
              <h1>Aviso de Privacidad</h1>
              <p>
                I.- IDENTIDAD Y DOMICILIO DEL RESPONSABLE. Los datos personales por usted 
                proporcionados y que fueron recabados de forma lícita, son tratados por Alnitak 
                con domicilio Av. Centenario 1236, CDMX. correo hola@alnitak.mx, con la 
                finalidad de brindarle servicios que brindamos apegándonos a lo establecido 
                en la LFDPPP en lo relativo al tratamiento y transferencia de datos personales 
                y en particular, con lo establecido en los artículos 10 fracción IV y 37 fracción 
                VII de la LFPDPPP.
              </p>
              <p>
                II.- FINALIDAD DEL TRATAMIENTO DE LOS DATOS PERSONALES. Alnitak, tratará los datos 
                personales del Titular para el cumplimiento de las obligaciones derivadas de una 
                relación jurídica y que se consideren análogas para efectos legales, esto, con base 
                en el artículo 10 fracción IV de la LFPDPPP y 15 fracción II del RLFPDPPP. Los datos 
                personales serán tratados de conformidad con la Ley Federal de Protección de Datos 
                Personales en Posesión de los Particulares y su Reglamento, observándose siempre 
                los principios de licitud, consentimiento, información, calidad, finalidad, lealtad, 
                proporcionalidad y responsabilidad; así mismo, los datos serán recabados y tratados 
                de manera lícita.
              </p>
              <p>
                Hacemos de su conocimiento que, a fin de registrarse o ponerse en contacto en el 
                presente sitio web, se le pedirán los siguientes datos: nombre completo, correo 
                electrónico y teléfono móvil.
              </p>
              <p>
                III.- TRANSFERENCIA DE DATOS PERSONALES. Los datos personales podrán ser transferidos 
                a las Autoridades Fiscales y/o Administrativas con estricto apego a la 
                confidencialidad del Servicio y para dar cumplimiento a las obligaciones derivadas de 
                la Prestación de Servicios proporcionados por Alnitak, y el Titular a través de un 
                contrato, esto, con base al artículo 37 fracción VII de la LFPDPPP y 15 fracción II del 
                RLFPDPPP.
              </p>
              <p>
                IV.- DATOS PERSONALES SENSIBLES. Alnitak no solicita datos sensibles ni comparte sus datos 
                personales con terceros distintos a una autoridad fiscal y/o administrativa y/o nuestros 
                colaboradores; colaboradores con los cuales tenemos un contrato de confidencialidad.
              </p>
              <p>
                V.- CONFIDENCIALIDAD DE LOS DATOS PERSONALES. La confidencialidad de los datos personales 
                está garantizada y los mismos están protegidos por medidas de seguridad administrativas, 
                técnicas y físicas, para evitar su daño, pérdida, alteración, destrucción, uso, acceso o 
                divulgación indebida.
              </p>
              <p>
                VI.- PRINCIPIOS DE PROTECCIÓN A LOS DATOS PERSONALES. Alnitak velará por el cumplimiento 
                de los principios de protección de datos personales establecidos en la respectiva Ley, 
                debiendo adoptar las medidas necesarias para su aplicación. Lo anterior aplicará aún y 
                cuando estos datos fueren tratados por un tercero a solicitud del responsable. Alnitak, 
                tomará las medidas necesarias y suficientes para garantizar que el aviso de privacidad 
                dado a conocer al Titular, sea respetado en todo momento por él o por terceros con los 
                que guarde alguna relación jurídica o subordinada.
              </p>
              <p>
                VII.- EJERCICIO DE LOS DERECHOS DE ACCESO, RECTIFICACION, CANCELACION Y OPOSICION. 
                Cualquier Titular, o en su caso, su representante legal, podrá ejercer los derechos de 
                acceso, rectificación, cancelación y oposición previstos en la LFPDPPP. El ejercicio de 
                cualquiera de ellos no es requisito previo ni impide el ejercicio de otro. La solicitud de 
                acceso, rectificación, cancelación u oposición deberá contener y acompañar lo siguiente:
                <ol>
                  <li>
                    El nombre del Titular y domicilio u otro medio para comunicarle la respuesta a su 
                    solicitud;
                  </li>
                  <li>
                    Los documentos que acrediten la identidad o, en su caso, la representación legal 
                    del Titular;
                  </li>
                </ol>
              </p>
              <p>
                VIII. La descripción clara y precisa de los datos personales respecto de los que se busca 
                ejercer alguno de los derechos antes mencionados, y
                <ol>
                  <li>
                    Cualquier otro elemento o documento que facilite la localización de los datos personales. 
                    El Titular tendrá en todo momento el derecho a cancelar sus datos personales. La 
                    cancelación de datos personales dará lugar a un periodo de bloqueo tras el cual se 
                    procederá a la supresión del dato. Alnitak, podrá conservarlos exclusivamente para efectos 
                    de las responsabilidades nacidas del tratamiento. El periodo de bloqueo será equivalente 
                    al plazo de prescripción de las acciones derivadas de la relación jurídica que funda el 
                    tratamiento en los términos de la Ley aplicable en la materia. Una vez cancelado el dato 
                    se dará aviso a su Titular.
                  </li>
                </ol>
              </p>
              <p>
                El responsable comunicará al Titular, en un plazo máximo de veinte días, contados desde la fecha 
                en que se recibió la solicitud de acceso, rectificación, cancelación u oposición, la determinación 
                adoptada, a efecto de que, si resulta procedente, se haga efectiva la misma dentro de los quince 
                días siguientes a la fecha en que se comunica la respuesta. Tratándose de solicitudes de acceso a 
                datos personales, procederá la entrega previa acreditación de la identidad del solicitante o 
                representante legal, según corresponda.
              </p>
              <p>
                Los plazos antes referidos podrán ser ampliados una sola vez por un periodo igual, siempre y cuando 
                así lo justifiquen las circunstancias del caso.
              </p>
              <p>
                IX.- DEPARTAMENTO DE DATOS PERSONALES. Podrá ejercer los derechos de acceso, rectificación, 
                cancelación u oposición al tratamiento de sus datos personales siguiendo lo descrito en el apartado 
                VII de este aviso, a través del correo electrónico: hola@alnitak.mx
              </p>
              <p>
                X.-USO DE COOKIES. El sitio web de Alnitak utiliza tecnologías de terceros que incluyen “cookies”, 
                que son pequeños archivos de texto que un servidor web coloca en su disco duro. Las cookies 
                contienen información que posteriormente puede leer un servidor web del dominio que emitió la 
                cookie para usted. Uno de los principales objetivos de las cookies es almacenar sus preferencias y 
                otro tipo de información en el equipo para ahorrarle tiempo, al eliminar la necesidad de escribir 
                varias veces la misma información; además, permite mostrar contenidos personalizados y anuncios 
                publicitarios orientados en sus visitas posteriores a estos sitios. Usted tiene la capacidad de 
                aceptar o rechazar cookies. La mayoría de los navegadores web aceptan cookies de manera automática, 
                pero por lo general usted puede modificar la configuración del navegador para rechazar las cookies, 
                si así lo prefiere.
              </p>
              <Chip 
                icon={<KeyboardDoubleArrowLeftIcon />} 
                color="primary" 
                label="Regresar" 
                sx={{
                  padding:"1rem",
                  backgroundColor:"#FFFFFF",
                  color:"#025D8C",
                  "&:hover": {
                    backgroundColor:"#025D8C",
                    color:"#FFFFFF"
                  }
                }}
                onClick={handleClick} />
              <p>
                El presente Aviso de Privacidad podrá ser modificado en el futuro. En todo caso, cualquier 
                modificación al mismo se hará de su conocimiento mediante la publicación de este en la siguiente 
                página web: https://alnitak.mx/aviso-de-privacidad/  ha leído y acepta los términos contenidos en 
                el presente Aviso de Privacidad.
              </p>
            </section>
          </Html>
          
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
      <Footer />
      </>
    );
  }