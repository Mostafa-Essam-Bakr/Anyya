import "./App.css";
import Ai from "./chatboot/Chatboot1";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import Start from "./chatboot/Start";
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Start" element={<Ai />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
