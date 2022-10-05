import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { createBrowserHistory } from "history";


import Main from "./pages/main/Main"
import DataViz from "./pages/data_viz/DataViz";
import PrivacyNotice from "./pages/privacy_notice/PrivacyNotice";

import GlowEffect from "./components/GlowEffect";

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route exact path="/visualizacion-de-datos" element={<DataViz />}></Route>
        <Route exact path="/glow-effect" element={<GlowEffect />}></Route>
        <Route exact path="/aviso-de-privacidad" element={<PrivacyNotice />}></Route>
      </Routes>
    </Router>
  );
};

export default App;