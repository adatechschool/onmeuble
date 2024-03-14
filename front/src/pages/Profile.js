import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login2", {
        email,
        password,
      });
      console.log("Response data:", response.data);
      if (response.data.message === "Connexion réussie") {
        navigate("/productsAdmin");
      } else {
        console.error("Erreur lors de la connexion:", response.data);
        setError("Identifiants invalides.");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      setError("Une erreur est survenue lors de la connexion.");
    }
  };

  if(error) {
    console.log("Error:", error);
  }

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Se connecter</button>
      <p id="error">Erreur</p>
    </form>
  );
}

export default LoginForm;
