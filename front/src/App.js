import "./App.css";
import ListArticle from "./components/ListArticle";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>On meuble</h1>
        <ListArticle />
      </div>
    </div>
  );
}

export default App;
