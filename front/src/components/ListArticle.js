//! Imports (IMPORTANT )

import "../App.css";
import { Link } from "react-router-dom";

//todo: Import d'images à revoir (si possible)
import Alex from "../img/Alex.png"
import Gluck from "../img/Gluck.jpg";
import Bubbule from "../img/Bubbule.jpg";
import Narnia from "../img/Narnia.jpg";


//? Liste d'objets

const arrayOfFurniture = [
  {
    id: 1,
    name: "Gluck",
    type: "Chaise",
    img: Gluck,
    dimensions: "55cm x 60cm x 84cm",
    color: "Rouge & Or",
    material: "Bois",
    price: "35 €",
    alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo. Fusce malesuada vulputate faucibus. Integer in hendrerit nisi. Praesent a hendrerit urna. In non imperdiet elit, sed molestie odio.",
  },
  {
    id: 2,
    name: "Alex",
    type: "Canapé",
    img: Alex,
    dimensions: "214cm x 87cm x 84cm",
    color: "Tigre",
    material: "Velours",
    price: "199 €",
    alt: "POURQUOI ???",
  },
  {
    id: 3,
    name: "Bubbule",
    type: "Table",
    img: Bubbule,
    dimensions: "160cm x 90cm x 78cm",
    color: "Vert anis",
    material: "Bois",
    price: "80 €",
    alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo. Fusce malesuada vulputate faucibus. Integer in hendrerit nisi. Praesent a hendrerit urna. In non imperdiet elit, sed molestie odio.",
  },
  {
    id: 4,
    name: "Narnia",
    type: "Armoire",
    img: Narnia,
    dimensions: "210cm x 140cm x ♾️",
    color: "Or",
    material: "Or",
    price: "Inestimable",
    alt: "Oui, oui, c'est bien l'armoire de Narnia.",
  }
];

// On crée une variable qui prends un tableau d'objets (arrayOfFurniture)
const listFurniture = arrayOfFurniture.map((product) => { // On map le tableau pour retourner un article par objet (product)
    return(
      // On génère un article par objet
      <article key={product.id}>
        <h2>{product.name}</h2>
        <p className="type-p">{product.type}</p>
        {/* //todo: changer la balise <a> car pas de href nécessaire */}
        <a className="frame" target="_blank">
          <img src={product.img} className='img-furniture' alt={product.alt}/>              
        </a> 
        <Link to={`/products/${product.id}`}>
          <button className="buy">
            Voir plus
          </button>
        </Link>
        <p className="price-p">{product.price}</p>
      </article>
    )
  }
);

// On retourne la liste d'articles dans une div
function ListArticle() {
  return <div className="article-container">{listFurniture}</div>;
}

//! Exports (IMPORTANT)

export default ListArticle;
export { arrayOfFurniture }; //! Requis pour l'import dans Details.js
