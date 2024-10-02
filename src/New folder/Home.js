import Cursor from "./Mouse.js/Curser";
import "./Home.css";
import Nav from "./Componant/Nav";
import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <div className="Homep">
      <Nav />

      <Cursor />
      <Outlet />
    </div>
  );
}
