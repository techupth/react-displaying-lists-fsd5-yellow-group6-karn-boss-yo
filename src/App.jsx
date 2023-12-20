import "./App.css";
import { Movies } from "./data/movies";

function App() {
  return (
    <div className="App">
      <h1>Movie List Section</h1>
      <section className="movie-list-section">
        { Movies }
      </section>
    </div>
  );
}

export default App;
