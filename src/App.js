import "./App.css";
import Ai from "./chatboot/Chatboot1";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import Start from "./Start";
import Login from "./chatboot/Login";
import Payment from "./chatboot/Payment";
import Sub from "./chatboot/Sub";
import "./chatboot/Chat.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";
import Contact from "./Contact";
import Homechild from "./Homechild";
import Setting from "./Setting";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
            <Route path="/Homechild" element={<Homechild />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />{" "}
            <Route path="/Start" element={<Start />} />{" "}
            <Route path="/login" element={<Login />} />{" "}
            <Route path="/Setting" element={<Setting />} />{" "}
          </Route>
        </Routes>{" "}
      </HashRouter>
    </div>
  );
}

export default App;
