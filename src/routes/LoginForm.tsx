import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  useEffect(() => {
    document.title = "Login | XFarmer";
  }, [location]);

  const generateRandomToken = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters[randomIndex];
    }
    return token;
  }

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('loggedInUser');
    if (loggedInStatus) {
      navigate("/dashboard");
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isValidEmail = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/.test(email);
    const isValidPassword = password.length >= 6;

    if (!isValidEmail) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Please enter a valid email address." }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    if (!isValidPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Please enter a password of at least 6 characters.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
  
    if (isValidEmail && isValidPassword) {
      const token = generateRandomToken();
      localStorage.setItem("loggedInUser", JSON.stringify({ email, token }));
      navigate("/dashboard");
    }
    
    setEmail("");
    setPassword("");
  };

  return (
    <div className="loginBLock">
      <div className="container">
        <div className="landText">
          <h1>La Ferme, </h1>
          <h2>We manage your whole farm activity and workers.</h2>
          <p className="small">Lorem ipsum dolor sit amet consectetur inventore role in computer Science.</p>
          <a href="#" className="btn">Learn More +</a>
        </div>
        <div className="card">
          <form onSubmit={handleSubmit}>
            <label>Your Email: </label>
            <input
              value={email}
              type="email"
              placeholder="Your Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>{errors.email}</span>
            <label>Your Password: </label>
            <input
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>{errors.password}</span>
            <div className="submitBtn">
              <button type="submit">Login in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
