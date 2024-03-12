import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter votre logique d'identification avec le backend
    // Une fois l'identification réussie, naviguez vers la page Dashboard
    navigate("/ProductsAdmin.js");
  };

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
      <Link to="./ProductsAdmin">
        <button type="submit">Se connecter</button>
      </Link>
    </form>
  );
}

//! Export (IMPORTANT)

export default Profile;
