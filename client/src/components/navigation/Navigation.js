import Tabs from "./Tabs";
import Tab from "./Tab";
import Paper from "../feedback/Paper";


export default function Navigation() {
    return(
        <Tabs >
          <Tab label={"home"} tabName={"HOME"}>
            {/* <img
              src="https://i.pinimg.com/736x/bd/90/f3/bd90f38794d3276f5d2104c7288e486f.jpg"
              height="250"
            /> */}
          </Tab>
          <Tab label={"tecnologies"} tabName={"TECNOLOGIAS "}>
            Las estrellas interactivas
          </Tab>
          <Tab label={"solutions"} tabName={"SOLUCIONES"}>
            <div className="ctn">
              <h2 className="subtitle">SOLUCIONES</h2>
              <div className="solutions-ctn">
                <div className="solutions-box">
                  <Paper>
                    <h3>Landing</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </Paper>
                </div>
                <div className="solutions-box">
                  <Paper>
                    <h3>Sitio web</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </Paper>
                </div>
                <div className="solutions-box">
                  <Paper>
                    <h3>Web App</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </Paper>
                </div>
              </div>
            </div>
          </Tab>

          <Tab label={"portfolio"} tabName={"PORTAFOLIO"}>
            <p>Cuando haya...</p>
          </Tab>
          <Tab label={"us"} tabName={"NOSOTROS"}>
            <div className="ctn">
              <h2 className="subtitle">NOSOTROS</h2>
              <div className="us-ctn">
                <div className="us-icons">
                  <ul>
                    <li>
                      <span>*</span>
                    </li>
                    <li>
                      <span>*</span>
                    </li>
                    <li>
                      <span>*</span>
                    </li>
                    <li>
                      <span>*</span>
                    </li>
                  </ul>
                </div>
                <div className="us-box">
                  <Paper>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus nec fermentum ante, id accumsan libero. Aenean
                      convallis dignissim sem ac euismod. Proin hendrerit nunc
                      et libero cursus, ac rhoncus felis volutpat. Fusce
                      venenatis erat vitae turpis faucibus fermentum vitae vitae
                      purus. Donec pulvinar diam sit amet nisi ullamcorper
                      finibus. Quisque eget ipsum sit amet purus fermentum
                      rhoncus aliquam ut nibh. Duis eu dui leo. Praesent rutrum
                      elit nec odio molestie, sit amet posuere erat auctor. In
                      quis turpis nec nibh dapibus sollicitudin eu et mauris.
                      Praesent dictum, nisl non condimentum tincidunt, sapien
                      tortor rhoncus ex, eu rhoncus libero odio eu ex. Nunc
                      vitae nisi dui. Morbi sed tempus nulla. In posuere
                      interdum ligula congue mattis. Vivamus ac vehicula diam,
                      ut hendrerit nisl
                    </p>
                  </Paper>
                </div>
              </div>
            </div>
          </Tab>
          <Tab label={"contact"} tabName={"CONTACTO"}>
            <p>Contacto</p>
          </Tab>
        </Tabs>
    )
}