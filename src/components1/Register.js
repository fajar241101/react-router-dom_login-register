import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();
  const handleRegister = () => {
    // Perform registration logic here
    const userData = { email, password, username };
    localStorage.setItem(email, JSON.stringify(userData));
    console.log("Registration successful!");
    alert("Registrasi berhasil!!");
    navigate("/login");
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card mt-5">
              <div className="card-header">Form Register</div>
              <div className="card-body">
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setUsername(e.target.value)}
                    name="username"
                    value={username}
                  ></input>
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    value={email}
                  ></input>
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    value={password}
                  ></input>
                </div>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-success btn-block"
                  onClick={handleRegister}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
