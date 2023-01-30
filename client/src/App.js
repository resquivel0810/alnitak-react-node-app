import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { createBrowserHistory } from "history";


import Main from "./pages/main/Main"
import DataViz from "./pages/data_viz/DataViz";
import PrivacyNotice from "./pages/privacy_notice/PrivacyNotice";
import WebSites from "./pages/web_sites";

import GlowEffect from "./components/GlowEffect";

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route exact path="/sitios-web" element={<WebSites />}></Route>
        <Route exact path="/aviso-de-privacidad" element={<PrivacyNotice />}></Route>
      </Routes>
    </Router>
  );
};

export default App;