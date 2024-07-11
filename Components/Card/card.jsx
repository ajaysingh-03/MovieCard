import './card.css'
// import movieData from '../Card/data';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";

function MovieCard({Images,Title, Year, Actors,Runtime, Genre, Plot, Poster}){
    return (
        <div className="card-container">
            <div className="movie-card">
                <div className="left-content">
                    <div className="movie-header">
                        <div className="movieImg">
                            <img src={Images} alt="" className='movie-image'/>
                        </div>
                        <div className="movie-details">
                            <h2 className='movie-name'>{Title}</h2>
                            <p className='movie-actor'>{Year}, {Actors}</p>
                            <div className="movie-meta">
                                <span className='movie-duration'>{Runtime}</span>
                                <span className='movie-genre'>{Genre}</span>
                            </div>
                        </div>
                    </div>
                    <p className='movie-about'>{Plot}</p>
                    <div className="icons">
                        <i className="fas fa-share-alt"></i>
                        <i className="fas fa-heart"></i>
                        <i className="fas fa-comment-alt"></i>
                    </div>
                </div>
                <div className="right-content">
                    <img src={Poster} alt="Bg-Img" />
                </div>
            </div>
        </div>
    );
}

export default MovieCard;