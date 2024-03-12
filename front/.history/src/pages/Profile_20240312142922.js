//! Imports (IMPORTANT)

import "../App.css";

import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de connexion avec votre backend
    console.log("Email:", email);
    console.log("Mot de passe:", password);
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      {" "}
      {/* Utilisation de la classe "login-form" */}
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
    </form>
  );
}

export default LoginForm;

/*

//? Component
//todo: Créer la page profil administrateur

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}

//! Export (IMPORTANT)

export default Profile;  */
