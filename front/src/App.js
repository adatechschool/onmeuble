import "./App.css";
import Article from "./components/Article";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />

      <div className="container">
        <h1>On meuble</h1>
        <div className="article-container">
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </div>
  );
}

export default App;
