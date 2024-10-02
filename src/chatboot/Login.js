import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Login component
export default function Login({ onNameSubmit }) {
  const [name, setName] = useState("");
  const [accept, setAccept] = useState(false);
  const navigate = useNavigate();
  const [email, SetEmail] = useState("");
  const [password, SetPssword] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    setAccept(true);

    if (name.length > 10 && password.length > 8) {
      if (email === "Mesharifaleh@gmail.com" && password === "00123456789") {
        // إذا كان البريد الإلكتروني يساوي "MMMMMMMMM"، افتح صفحة أخرى
        window.location.pathname = "/Setting";
      } else {
        // تخزين الاسم في Local Storage
        localStorage.setItem("userName", name);
        window.location.pathname = "/Homechild";
      }
    }
  }

  return (
    <div className="login">
      <form className="frm1" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder=" your Name please"
          id="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        {name.length <= 10 && accept && (
          <p className="error">name more than 8 char</p>
        )}

        <label htmlFor="email"> Email</label>
        <input
          type="email"
          name="email"
          placeholder=" your Name please"
          id="email"
          value={email}
          required
          onChange={(e) => SetEmail(e.target.value)}
        />

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
        <button type="submit">Login </button>
      </form>
    </div>
  );
}

// مكون آخر يستقبل قيمة الاسم
export function Greeting({ name }) {
  return <div>مرحبا، {name}!</div>;
}
