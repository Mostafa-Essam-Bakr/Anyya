import { useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Login() {
  const [email, SetEmail] = useState("");
  const [password, SetPssword] = useState("");
  const [accept, SetAccept] = useState(false);
  const [EmailErr, SetEmailerr] = useState("");

  async function Submit(e) {
    let flag = true;
    e.preventDefault();
    SetAccept(true);
    if (password.length <= 8) {
      flag = false;
    } else flag = true;

    window.location.pathname = "/Start";
  }
  return (
    <div className="login">
      <Link to="/" data-aos="fade-right">
        {" "}
        <IoMdArrowRoundBack className="back" />
      </Link>
      <Link to="/Payment" className="sub">
        ابتكار
      </Link>
      <Outlet />

      <form className="frm1" onSubmit={Submit}>
        <label htmlFor="email"> Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          id="email"
          value={email}
          required
          onChange={(e) => SetEmail(e.target.value)}
        />
        {accept && EmailErr === 401 && <p>email is not corect</p>}

        <label htmlFor="password"> Pass word</label>
        <input
          type="password"
          name="password"
          placeholder="Pass word"
          id="password"
          value={password}
          onChange={(e) => SetPssword(e.target.value)}
        />
        {password.length <= 8 && accept && (
          <p className="error">password motr than 8 char</p>
        )}

        <Link to="/Start">
          <button type="submit">Login</button>
        </Link>
      </form>
    </div>
  );
}
