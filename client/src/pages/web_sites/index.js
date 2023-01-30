import classes from './index.module.css';


import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';



const WebSites = () => {
  
  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>SITIOS WEB</h1>
      <p className={classes.paragraph}>
        En Alnitak, nos enorgullecemos de ofrecer servicios de desarrollo de
        software a nuestros clientes para crear sitios web modernos y eficientes
        para sus negocios. Nuestros programadores están entrenados y certificados
        en las últimas tecnologías de desarrollo web, lo que les permite ofrecer
        a nuestros clientes productos de primera calidad.
      </p>
      <p className={classes.paragraph}>
        Nuestros servicios de desarrollo de software incluyen la creación de
        sitios web personalizados, diseño y desarrollo de aplicaciones web,
        diseño de interfaces de usuario, creación de contenidos, optimización de
        motores de búsqueda, análisis de datos y mucho más. Estamos comprometidos
        con ofrecer a nuestros clientes productos y servicios de la más alta
        calidad, y trabajamos duro para satisfacer todas sus necesidades.
      </p>
      <p className={classes.paragraph}>
        También ofrecemos capacitación y soporte continúo a nuestros clientes
        para asegurar que su proyecto de desarrollo de software sea exitoso. Si
        estás buscando un equipo de desarrollo de software experto, contáctanos hoy para obtener más información acerca de nuestros
        servicios y cómo podemos ayudarte.
      </p>
    <div className={classes.btnContainer}>
        <Button variant="contained">
            <Link to="/#solutions">Contáctanos</Link>
        </Button>
    </div>
    </div>
  );
};

export default WebSites;
