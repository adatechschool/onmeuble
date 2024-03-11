//! Imports (IMPORTANT)

import ListArticle from "../components/ListArticle";
import '../App.css'

//? Component


function Home() {
    return (
        <div className="container">
            <h1>On meuble</h1>
            <ListArticle />
        </div>
    );
}

//! Export (IMPORTANT)

export default Home;