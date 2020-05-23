import React from 'react';
import { connect } from 'react-redux';
import style from './Favorite.module.css'
import filmsReducer from '../../redux/films-reducer';

class Favorite extends React.Component {

    
    render() {
        let film = this.props.ourFilms.find(element => {
            if(element.id === this.props.film){
                return true
            }
        })

        return (
            <div className={style.filmContainer}>
                <div className={style.filmImg}>
                    {!film && <p>Выберите фильм</p>}
                    {film &&
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`}></img>
                            <p>{`Title: ${film.title}`}</p>
                            <p>{`Popularity: ${film.popularity}`}</p>
                            <p>{`Overview: ${film.overview}`}</p>
                            <p>{`Date: ${film.release_date}`}</p>
                            <p>{`Reiting: ${film.vote_average}`}</p>
                        </div>}
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    film: state.filmsPage.currentFilm,
    ourFilms: state.filmsPage.films
})

export default connect(mapStateToProps)(Favorite);