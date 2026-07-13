import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [dashboard, setDashboard] = useState({
    totalContacts: 0,
    totalSubscribers: 0,
  });

  const [messages, setMessages] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Agar token nahi hai to login page par bhej do
    if (!token) {
      navigate("/admin/login");
      return;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    // Dashboard Count
    fetch("https://personal-portfolio-r2t9.onrender.com/api/admin/dashboard", { headers })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setDashboard(data.dashboard);
        } else {
          navigate("/admin/login");
        }
      });

    // Contact Messages
    fetch("https://personal-portfolio-r2t9.onrender.com/api/admin/messages", { headers })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMessages(data.messages);
        }
      });

    // Subscribers
    fetch("https://personal-portfolio-r2t9.onrender.com/api/admin/subscribers", { headers })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSubscribers(data.subscribers);
        }
      });

  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>

      <button
  onClick={handleLogout}
  className="logout-btn"
>
        Logout
      </button>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Total Contacts</h3>
          <h2>{dashboard.totalContacts}</h2>
        </div>

        <div className="dashboard-card">
          <h3>Total Subscribers</h3>
          <h2>{dashboard.totalSubscribers}</h2>
        </div>
      </div>

      <h2>Contact Messages</h2>

<div className="table-container">
  <table className="dashboard-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Message</th>
      </tr>
    </thead>

    <tbody>
      {messages.map((msg) => (
        <tr key={msg._id}>
          <td>{msg.firstName} {msg.lastName}</td>
          <td>{msg.email}</td>
          <td>{msg.phone}</td>
          <td>{msg.message}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      <h2>Newsletter Subscribers</h2>

<div className="table-container">
  <table className="dashboard-table">
    <thead>
      <tr>
        <th>Email</th>
      </tr>
    </thead>

    <tbody>
      {subscribers.map((sub) => (
        <tr key={sub._id}>
          <td>{sub.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  );
};

export default AdminDashboard;