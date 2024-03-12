//! Imports (IMPORTANT)

import "./App.css";
import logo from "./img/furniture.png";
import "https://kit.fontawesome.com/6a21cd18bd.js";
import Products from "./pages/Products";
import Basket from "./pages/Basket";
import Profile from "./pages/Profile";
import Details from "./pages/Details";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import ListArticle from "./components/ListArticle";

//? Component

function App() {
  return (
    <div>
      {/* Barre de navigation */}
      <nav>
        <div className="leftNav">
          {/* <Link> permet de se référer plus tard au 'path' correspondante (dans ce cas, './products/') */}
          <Link to="/products/">
            <img id="logo" src={logo} alt="On meuble" />
          </Link>
        </div>
        <div className="rightNav">
          <input id="search-input" type="text" placeholder="Rechercher" />
          <Link to="/basket">
            <i className="fa-solid fa-cart-shopping cart"></i>
          </Link>
          <Link to="/profile">
            <img
              id="profilePic"
              src="https://media.istockphoto.com/id/1300845620/fr/vectoriel/appartement-dic%C3%B4ne-dutilisateur-isol%C3%A9-sur-le-fond-blanc-symbole-utilisateur.jpg?s=612x612&w=0&k=20&c=BVOfS7mmvy2lnfBPghkN__k8OMsg7Nlykpgjn0YOHj0="
              alt=""
            />
          </Link>
        </div>
      </nav>
      {/* <Routes> permet de créer des routes, cette balise comprend que des routes vont être créées */}
      <Routes>
        {/* <Route> fait apparaître au démarage du serveur l'élément Products à l'URL ./products/ */}
        <Route path="/" element={<Navigate to="/products/" />} />
        {/* <Route> fait apparaître l'élément Products à l'URL ./products/ */}
        <Route path="/products/" element={<Products />} />
        {/* <Route> fait apparaître l'élément Details à l'URL ./products/:id */}
        <Route path="/products/:id" element={<Details />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Profile" element={<Navigate to="/ProductsAdmin/" />} />
      </Routes>
    </div>
  );
}

//! Export (IMPORTANT)

export default App; //* VOIR index.js
