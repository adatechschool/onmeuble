//! Imports (IMPORTANT)

import ListArticle from "../components/ListArticle";
//import "../App.css";

//? Component

function Products() {
  return (
    <div className="container">
      <div className="container-banner">
        <h1>Premier site de ventes de meubles vintage !</h1>
      </div>
      <ListArticle />
    </div>
  );
}

//! Export (IMPORTANT)

export default Products;
