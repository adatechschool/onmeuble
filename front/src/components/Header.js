import logo from "../img/furniture.png";
import "../App.css";
import "https://kit.fontawesome.com/6a21cd18bd.js";

function Header() {
  return (
    <div className="nav-bar">
      <div className="bar-left">
        <img id="logo" src={logo} alt="" />
      </div>
      <div className="bar-right">
        <input id="search-input" type="text" placeholder="Rechercher" />
        <a href="">
          <i className="fa-solid fa-cart-shopping cart"></i>
        </a>
        <a href="">
          <img
            id="p-p"
            src="https://media.istockphoto.com/id/1300845620/fr/vectoriel/appartement-dic%C3%B4ne-dutilisateur-isol%C3%A9-sur-le-fond-blanc-symbole-utilisateur.jpg?s=612x612&w=0&k=20&c=BVOfS7mmvy2lnfBPghkN__k8OMsg7Nlykpgjn0YOHj0="
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
