import meuble from "../img/meuble.jpg";
import "../App.css";

const arrayOfFurnitures = [
  {
    id: 1,
    name: "Gluck",
    type: "Chaise",
    img: "https://th.bing.com/th/id/OIP.F7b7bws9KhpOYmibSE7vDQHaHa?w=214&h=214&c=7&r=0&o=5&pid=1.7",
    dimensions: "55cm x 60cm x 84cm",
    color: "Noir",
    material: "Bois",
    price: "25 €",
  },

  {
    id: 2,
    name: "Alex",
    type: "Canapé",
    dimensions: "214cm x 87cm x 84cm",
    color: "Bleu",
    material: "Velour",
    price: "199 €",
  },

  {
    id: 3,
    name: "Bubbule",
    type: "Table",
    dimensions: "160cm x 90cm x 78cm",
    color: "Blanche",
    material: "Bois",
    price: "80 €",
  },
  {
    id: 3,
    name: "Narnia",
    type: "Armoire",
    dimensions: "210cm x 140cm x 190cm",
    color: "Or",
    material: "Or",
    price: "8000000 €",
  },
];

const listFurniture = arrayOfFurnitures.map((furniture) => (
  <article key={furniture.id}>
    <h2>{furniture.name}</h2>
    <p>{furniture.type}</p>
    <img className="img-furniture" src={meuble} alt="" />
    <div className="footer">
      <button className="buy">Acheter</button>
      <p className="price">{furniture.price}</p>
    </div>
  </article>
));

function ListArticle() {
  return <div className="article-container">{listFurniture}</div>;
}

export default ListArticle;
