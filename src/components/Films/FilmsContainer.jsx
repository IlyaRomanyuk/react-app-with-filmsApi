import React from 'react';
import { connect } from 'react-redux';
import Films from './Films';
import { setFilmsAC, setAllPagesAC, isFetchingAC, onPathChangeAC, onHeartClickAC, onSomeFilmAC, onSortByTopAC, onSortByDownAC } from '../../redux/films-reducer';
import * as axios from 'axios';
import Preloader from '../Preloader/Preloader';

class FilmsContainer extends React.Component {
    componentDidMount() {
        this.props.isFetching(true);
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0867ba5883e921d5cf9d6599fc0767b0&language=en-US&page=1').
            then(response => {
                this.props.setAllPages(response.data.total_pages);
                this.props.setFilms(response.data.results);
                this.props.isFetching(false);
            })
    }

    onPathChange = (page) => {
        
        this.props.isFetching(true);
        this.props.onPathChange(page);
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0867ba5883e921d5cf9d6599fc0767b0&language=en-US&page=${page}`).
            then(response => {
                this.props.setAllPages(response.data.total_pages);
                this.props.setFilms(response.data.results);
                this.props.isFetching(false);
            })
    }

    render() {
        debugger;
        return (
            <div>
                {this.props.isFetchingType ? <Preloader /> : null}
                <Films films={this.props.films} 
                pageCount={this.props.pageCount} 
                onPathChange={this.onPathChange} 
                currentPage={this.props.currentPage}
                onHeartClick={this.props.onHeartClick}
                aboutThisFilm={this.props.aboutThisFilm}
                sortByTop={this.props.sortByTop}
                sortByDown={this.props.sortByDown}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    films: state.filmsPage.films,
    pageCount: state.filmsPage.pageCount,
    isFetchingType: state.filmsPage.isFetching,
    currentPage: state.filmsPage.currentPage
})

let mapDispatchToProps = (dispatch) => ({

    setFilms: (films) => {
        dispatch(setFilmsAC(films))
    },

    setAllPages: (pageCount) => {
        dispatch(setAllPagesAC(pageCount))
    },

    isFetching: (bool) => {
        dispatch(isFetchingAC(bool))
    },

    onPathChange: (page) => {
        dispatch(onPathChangeAC(page))
    },

    onHeartClick: (id) => {
        dispatch(onHeartClickAC(id))
    },

    aboutThisFilm: (id) => {
        dispatch(onSomeFilmAC(id))
    },

    sortByTop: () => {
        dispatch(onSortByTopAC())
    },

    sortByDown: () => {
        dispatch(onSortByDownAC())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer);