import React, { useState } from "react";
import "./LAB14.2.css"; // Import CSS for styling

const App = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    city: "",
    server: "",
    role: "",
    singleSignOn: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        singleSignOn: checked
          ? [...prev.singleSignOn, value]
          : prev.singleSignOn.filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const handleReset = () => {
    setFormData({
      username: "",
      password: "",
      city: "",
      server: "",
      role: "",
      singleSignOn: [],
    });
  };

  return (
    <div className="form-container">
      <h2>Novell Services Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <label>
          City of Employment:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </label>
        <label>
          Web server:
          <select name="server" value={formData.server} onChange={handleChange}>
            <option value="">-- Choose a server --</option>
            <option value="Server1">Server 1</option>
            <option value="Server2">Server 2</option>
            <option value="Server3">Server 3</option>
          </select>
        </label>

        <fieldset>
          <legend>Please specify your role:</legend>
          <label>
            <input
              type="radio"
              name="role"
              value="Admin"
              checked={formData.role === "Admin"}
              onChange={handleChange}
            />
            Admin
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="Engineer"
              checked={formData.role === "Engineer"}
              onChange={handleChange}
            />
            Engineer
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="Manager"
              checked={formData.role === "Manager"}
              onChange={handleChange}
            />
            Manager
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="Guest"
              checked={formData.role === "Guest"}
              onChange={handleChange}
            />
            Guest
          </label>
        </fieldset>

        <fieldset>
          <legend>Single Sign-on to the following:</legend>
          <label>
            <input
              type="checkbox"
              name="singleSignOn"
              value="Mail"
              checked={formData.singleSignOn.includes("Mail")}
              onChange={handleChange}
            />
            Mail
          </label>
          <label>
            <input
              type="checkbox"
              name="singleSignOn"
              value="Payroll"
              checked={formData.singleSignOn.includes("Payroll")}
              onChange={handleChange}
            />
            Payroll
          </label>
          <label>
            <input
              type="checkbox"
              name="singleSignOn"
              value="Self-service"
              checked={formData.singleSignOn.includes("Self-service")}
              onChange={handleChange}
            />
            Self-service
          </label>
        </fieldset>

        <div className="button-container">
          <button type="submit">Login</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
