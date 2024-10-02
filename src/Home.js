import Cursor from "./Mouse.js/Curser";
import "./Home.css";
import Nav from "./Componant/Nav";
import { Outlet } from "react-router-dom";
import Start from "./Start";

export default function Home() {
  return (
    <div className="Homep">
      <Nav />
      <Start />
      <Cursor />
      <Outlet />
    </div>
  );
}
