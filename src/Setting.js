import React, { useState } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faCog,
  faSignOutAlt,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function Setting() {
  const [activeTab, setActiveTab] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to control sidebar visibility
  const [showSettings, setShowSettings] = useState(false); // State to show/hide settings page

  return (
    <div className="dashboard">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setShowSettings={setShowSettings}
      />

      <div className="main-content">
        {showSettings ? (
          <SettingsPage
            setShowSettings={setShowSettings}
            setSidebarOpen={setSidebarOpen}
          />
        ) : (
          <>
            <Header setSidebarOpen={setSidebarOpen} />
            <Stats />
            <Table />
          </>
        )}
      </div>
    </div>
  );
}

function Sidebar({
  activeTab,
  setActiveTab,
  sidebarOpen,
  setSidebarOpen,
  setShowSettings,
}) {
  const scrollToUsers = () => {
    const usersSection = document.getElementById("users-section");
    if (usersSection) {
      usersSection.scrollIntoView({ behavior: "smooth" }); // التمرير السلس إلى قسم المستخدمين
    }
  };
  return (
    <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <h2>مشرف</h2>
      <ul>
        <li
          className={activeTab === "Home" ? "active" : ""}
          onClick={() => {
            setActiveTab("Home");
            setShowSettings(false); // Close settings page and go back to dashboard
            setSidebarOpen(false); // Optionally close sidebar
          }}
        >
          <FontAwesomeIcon icon={faHome} /> الرئيسية
        </li>
        <li
          className={activeTab === "Users" ? "active" : ""}
          onClick={() => {
            setActiveTab("Users");
            setShowSettings(false);
            scrollToUsers(); // التمرير إلى المستخدمين عند الضغط
            setSidebarOpen(false); // إغلاق الشريط الجانبي
          }}
        >
          <FontAwesomeIcon icon={faUsers} /> المستخدمين
        </li>
        <li
          className={activeTab === "Settings" ? "active" : ""}
          onClick={() => {
            setActiveTab("Settings");
            setShowSettings(true); // Show settings page
            setSidebarOpen(false); // Close sidebar
          }}
        >
          <FontAwesomeIcon icon={faCog} /> اضافة شات
        </li>
      </ul>
      <button className="close-sidebar" onClick={() => setSidebarOpen(false)}>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </button>
    </div>
  );
}

function Header({ setSidebarOpen }) {
  return (
    <header className="header">
      <button className="menu-button" onClick={() => setSidebarOpen(true)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <h1>مرحباً مشاري</h1>
      <button>Logout</button>
    </header>
  );
}

function Stats() {
  return (
    <div className="stats">
      <div className="stat-box">عدد المستخدمين: 00</div>
      <div className="stat-box">عدد المشتركين: 00</div>
      <div className="stat-box"> SAR 0مبالغ الاشتراك :00 </div>
    </div>
  );
}

function Table() {
  return (
    <div className="table" id="users-section">
      <h2>المستخدمين</h2>
      <table>
        <thead>
          <tr>
            <th>الاسم</th>
            <th>الحالة</th>
            <th>التاريخ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sameh Mohamed</td>
            <td>Logged in</td>
            <td>2024-10-01</td>
          </tr>
          <tr>
            <td>Sameer Safwat</td>
            <td>Updated Profile</td>
            <td>2024-10-01</td>
          </tr>
        </tbody>
      </table>

      <h2>المشرفين</h2>
      <table>
        <thead>
          <tr>
            <th>الاسم</th>
            <th>الحالة</th>
            <th>التاريخ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>مشاري</td>
            <td>Logged in</td>
            <td>2024-10-01</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
function SettingsPage({ setShowSettings, setSidebarOpen }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    alert(`New frontend interface: ${inputValue}`);
    setShowSettings(false); // Close settings page
  };

  return (
    <div className="settings-page">
      {" "}
      <button className="menu-button" onClick={() => setSidebarOpen(true)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <h2>Settings</h2>
      <div className="form-group">
        <label htmlFor="frontend-interface">
          Enter New Frontend Interface:
        </label>
        <input
          type="text"
          id="frontend-interface"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="settings-buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={() => setShowSettings(false)}>Cancel</button>
      </div>
    </div>
  );
}
export default Setting;
