import { useState } from "react";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">N</div>
          <div>
            <h2>NexusFlow</h2>
            <span>IoT Rule Engine</span>
          </div>
        </div>

        <nav>
          <button
            className={activePage === "Dashboard" ? "active" : ""}
            onClick={() => setActivePage("Dashboard")}
          >
            ◈ Dashboard
          </button>

          <button
            className={activePage === "Devices" ? "active" : ""}
            onClick={() => setActivePage("Devices")}
          >
            ◉ Devices
          </button>

          <button
            className={activePage === "Rules" ? "active" : ""}
            onClick={() => setActivePage("Rules")}
          >
            ⚙ Rules
          </button>

          <button
            className={activePage === "Logs" ? "active" : ""}
            onClick={() => setActivePage("Logs")}
          >
            ▤ Logs
          </button>
        </nav>

        <div className="sidebar-bottom">
          <button>⚙ Settings</button>
          <button>↪ Logout</button>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <h1>{activePage}</h1>
            <p>Monitor and manage your IoT automation system.</p>
          </div>

          <div className="status">
            <span className="status-dot"></span>
            System Online
          </div>
        </header>

        {activePage === "Dashboard" && (
          <>
            <section className="stats">
              <div className="card">
                <span>Total Devices</span>
                <strong>24</strong>
                <small>+4 this month</small>
              </div>

              <div className="card">
                <span>Active Devices</span>
                <strong>18</strong>
                <small>75% online</small>
              </div>

              <div className="card">
                <span>Active Rules</span>
                <strong>12</strong>
                <small>3 triggered today</small>
              </div>

              <div className="card">
                <span>Events Today</span>
                <strong>1,248</strong>
                <small>+12.5% from yesterday</small>
              </div>
            </section>

            <section className="content-grid">
              <div className="panel">
                <div className="panel-header">
                  <h2>Recent Rules</h2>
                  <button className="primary">+ Create Rule</button>
                </div>

                <div className="rule">
                  <div>
                    <strong>Temperature Alert</strong>
                    <p>If temperature &gt; 35°C</p>
                  </div>
                  <span className="badge success">Active</span>
                </div>

                <div className="rule">
                  <div>
                    <strong>Motion Detection</strong>
                    <p>If motion detected → Turn ON light</p>
                  </div>
                  <span className="badge success">Active</span>
                </div>

                <div className="rule">
                  <div>
                    <strong>Humidity Control</strong>
                    <p>If humidity &lt; 40% → Start humidifier</p>
                  </div>
                  <span className="badge warning">Paused</span>
                </div>
              </div>

              <div className="panel">
                <h2>Device Status</h2>

                <div className="device">
                  <span>🌡️ Temperature Sensor</span>
                  <b className="online">Online</b>
                </div>

                <div className="device">
                  <span>💡 Smart Light</span>
                  <b className="online">Online</b>
                </div>

                <div className="device">
                  <span>💧 Humidity Sensor</span>
                  <b className="offline">Offline</b>
                </div>

                <div className="device">
                  <span>🚪 Door Sensor</span>
                  <b className="online">Online</b>
                </div>
              </div>
            </section>
          </>
        )}

        {activePage === "Devices" && (
          <section className="panel page-panel">
            <div className="panel-header">
              <h2>IoT Devices</h2>
              <button className="primary">+ Add Device</button>
            </div>

            <p>Manage sensors, actuators and connected IoT devices.</p>
          </section>
        )}

        {activePage === "Rules" && (
          <section className="panel page-panel">
            <div className="panel-header">
              <h2>Automation Rules</h2>
              <button className="primary">+ Create Rule</button>
            </div>

            <p>Create conditions and actions for your IoT devices.</p>
          </section>
        )}

        {activePage === "Logs" && (
          <section className="panel page-panel">
            <h2>System Logs</h2>
            <p>Monitor rule executions and device events.</p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;