import "./App.css";

import movies from "./data/movies"

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
        <h1>Movie List Section</h1>

        {
          movies.map((item) => {
            return (
              <div className="movie-list-box">
                <div className="movie-pic">
                  <img className="picture" src={item.image} />
                </div>
                <div className="movie-details">
                  <div className="movie-title">
                    Title: {item.title}
                  </div>
                  <div className="movie-year">
                    Year: {item.year}
                  </div>
                  <div className="movie-runtime">
                    Runtime: {item.runtime}
                  </div>
                  <div className="movie-genres">
                    Genres:
                    {item.genres.map((genre) => {
                      return (
                        <div className="movie-genres-box">
                          {genre}
                        </div>
                      )
                    })}
                  </div>
                  <div className="movie-IMDB-ratings">
                    IMDB Ratings: {item.imdbRating}
                  </div>
                  <div className="movie-IMDB-votes">
                    IMDB Votes: {item.imdbVotes}
                  </div>
                </div>
              </div>
            )
          })
        }
        
      </section>
    </div>
  );
}

export default App;
