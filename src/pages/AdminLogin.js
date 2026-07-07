import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("token", data.token);

        setMessage("✅ Login Successful");

        // Redirect to Dashboard
        navigate("/admin/dashboard");
      } else {
        setMessage("❌ Invalid Email or Password");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Server Error");
    }
  };

  return (
    <div className="admin-login-container">
  <div className="admin-login-card">
      <h2>Admin Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
         className="admin-input"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="admin-input"
        />

        <button
          type="submit"
         className="admin-btn"
        >
          Login
        </button>
      </form>

     <p className="admin-message">{message}</p>
    </div>
    </div>
  );
};

export default AdminLogin;