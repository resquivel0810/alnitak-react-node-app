import SolutionCard from "../../surfaces/SolutionCard";
import Titles from "../../data_display/Titles";
import ThreeScene from "../../ThreeScene";
import Model3 from "../../LandingShip";
import Model4 from "../../WebpageShip";
import Model5 from "../../WebappShip";

//Three
import * as THREE from "three";
import {OrbitControls} from "@react-three/drei";

//Icons
import LanguageIcon from '@mui/icons-material/Language';
import TerminalIcon from '@mui/icons-material/Terminal';
import InsightsIcon from '@mui/icons-material/Insights';

import classes from "./Solutions.module.css";

const Solutions = () => {
    return (
        <div className={classes.ctn}>
          <Titles title="ALNITAK" subtitle="SOLUCIONES" />

          <div className={classes.solutionsCtn}>
            <SolutionCard
              title_1="SITIOS"
              title_2="WEB"
              subtitle="Haz que tu idea sea visible en internet"
              body="
              En nuestra empresa somos expertos en la creación de sitios web de calidad, diseñados para adaptarse a las necesidades específicas de nuestros clientes. Ofrecemos un servicio profesional que cubre todos los aspectos del desarrollo de un sitio web, desde el diseño hasta la implementación. Nuestro equipo de profesionales está compuesto por expertos en diseño gráfico, programación web, SEO y marketing digital. Estamos comprometidos a entregar a nuestros clientes sitios web de calidad, fiables, seguros y adaptados a sus necesidades."
              cta="ME INTERESA"
              icon={<LanguageIcon />}
            >
              <ThreeScene>
                <Model3
                  rotation={[0, -Math.PI / 2, -Math.PI / 6]}
                  scale={1}
                />
                <hemisphereLight
                  skycolor={new THREE.Color(0xc4ff00)}
                  groundColor={new THREE.Color(0xc4ff00)}
                  intensity={1}
                  position={[0, 100, 10]}
                />
                <OrbitControls enableZoom={false} autoRotate />
              </ThreeScene>
            </SolutionCard>
            <SolutionCard
              title_1="DESARROLLO DE"
              title_2="SOFTWARE"
              subtitle="Creamos soluciones tecnológicas a la medida "
              body="Ofrecemos a nuestros clientes la posibilidad de crear software de calidad y asequible. Nuestro equipo de desarrolladores de software cuenta con vasta experiencia en el sector y es capaz de crear productos de software personalizados para satisfacer las necesidades de cada cliente. Nuestros servicios también incluyen pruebas de calidad, soporte técnico y mejoras posteriores para garantizar que el software funcione como se espera."
              cta="ME INTERESA"
              icon={<TerminalIcon />}
            >
              <ThreeScene>
                <Model4 rotation={[0, -Math.PI / 2, -Math.PI / 6]} scale={25} />
                <hemisphereLight
                  skycolor={new THREE.Color(0x0380ff)}
                  groundColor={new THREE.Color(0x0380ff)}
                  intensity={2}
                  position={[0, 100, 10]}
                />
                <OrbitControls enableZoom={false} autoRotate />
              </ThreeScene>
            </SolutionCard>
            <SolutionCard
              title_1="BUSINESS"
              title_2="ANALYTCS"
              subtitle="Descubre los insights de tu negocio"
              body="A través de herramientas de matemáticas y machine learning, como el análisis predictivo y la estadística inferencial, identificamos patrones en los datos, detectamos tendencias y predecimos comportamientos. Esto nos permite ofrecer a nuestros clientes una vista global de sus operaciones y ayudarles a optimizar sus decisiones.
              "
              cta="ME INTERESA"
              icon={<InsightsIcon />}
            >
              <ThreeScene>
                <Model5 rotation={[0, -Math.PI / 2, -Math.PI / 6]} scale={25} 

                />
                <hemisphereLight
                  skycolor={new THREE.Color(0xd00dff)}
                  groundColor={new THREE.Color(0xd00dff)}
                  intensity={1.5}
                  position={[0, 100, 10]}
                />
                <OrbitControls enableZoom={false} autoRotate />
              </ThreeScene>
            </SolutionCard>
          </div>
        </div>
    )
}

export default Solutions;