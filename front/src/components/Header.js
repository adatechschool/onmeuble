import logo from "../img/furniture.png";
import "../App.css";
import "https://kit.fontawesome.com/6a21cd18bd.js";

function Header() {
  return (
    <nav>
      <div className="leftNav">
        <img id="logo" src={logo} alt="" />
      </div>
      <div className="rightNav">
        <input id="search-input" type="text" placeholder="Rechercher" />
        <a href="">
          <i className="fa-solid fa-cart-shopping cart"></i>
        </a>
        <a href="">
          <img
            id="profilePic"
            src="https://media.istockphoto.com/id/1300845620/fr/vectoriel/appartement-dic%C3%B4ne-dutilisateur-isol%C3%A9-sur-le-fond-blanc-symbole-utilisateur.jpg?s=612x612&w=0&k=20&c=BVOfS7mmvy2lnfBPghkN__k8OMsg7Nlykpgjn0YOHj0="
            alt=""
          />
        </a>
      </div>
    </nav>
  );
}

export default Header;
