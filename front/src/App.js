//! Imports (IMPORTANT)

import "./App.css";
import logo from "./img/furniture.png";
import "https://kit.fontawesome.com/6a21cd18bd.js";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Profile from "./pages/Profile";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
      <div>
        <nav>
          <div className="leftNav">
            <Link to="/">
              <img id="logo" src={logo} alt="" />
            </Link>
          </div>
          <div className="rightNav">
            <input id="search-input" type="text" placeholder="Rechercher" />
            <Link to="/basket">
              <i className="fa-solid fa-cart-shopping cart"></i>
            </Link>
            <Link to='/profile'>
              <img
                id="profilePic"
                src="https://media.istockphoto.com/id/1300845620/fr/vectoriel/appartement-dic%C3%B4ne-dutilisateur-isol%C3%A9-sur-le-fond-blanc-symbole-utilisateur.jpg?s=612x612&w=0&k=20&c=BVOfS7mmvy2lnfBPghkN__k8OMsg7Nlykpgjn0YOHj0="
                alt=""
              />
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
  );
}

//! Export (IMPORTANT)

export default App; //* VOIR index.js
