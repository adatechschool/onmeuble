//! Imports (IMPORTANT)

import ListArticle from "../components/ListArticle";
import "../App.css";

//? Component

function Home() {
  return (
    <div className="container">
      <h1>Premier site de ventes de meubles vintage !</h1>
      <ListArticle />
    </div>
  );
}

//! Export (IMPORTANT)

export default Home;
