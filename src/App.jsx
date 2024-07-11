
import './App.css'
import Card from '../Components/Card/card';
import Data from "../Components/Card/data";

function App() {

  return (
    <>
      {Data.map((movie, idx)=>(
          <Card 
            key = {idx}
            Images = {movie.Images}
            Title={movie.Title}
            Year={movie.Year}
            Actors={movie.Actors}
            Runtime={movie.Runtime}
            Genre={movie.Genre}
            Plot={movie.Plot}
            Poster={movie.Poster}
          />
      ))}
    </>
  )
}

export default App
