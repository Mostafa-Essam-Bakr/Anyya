import "./App.css";
import Ai from "./chatboot/Chatboot1";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import Start from "./chatboot/Start";
import Login from "./chatboot/Login";
import Payment from "./chatboot/Payment";
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Start />}>
            {" "}
            <Route path="/Start" element={<Ai />} />{" "}
            <Route path="/Login" element={<Login />} />{" "}
            <Route path="/Payment" element={<Payment />} />{" "}
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
