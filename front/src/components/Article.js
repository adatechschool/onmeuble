import meuble from "../img/meuble.jpg";
import "../App.css";

function Article() {
  return (
    <article>
      <h2>Meuble</h2>
      <p>Type de meuble</p>
      <img className="img-furniture" src={meuble} alt="" />
      <div className="footer">
        <button className="buy">Acheter</button>
        <p className="price">00$</p>
      </div>
    </article>
  );
}

export default Article;
