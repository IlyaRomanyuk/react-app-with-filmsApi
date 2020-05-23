import React from 'react';
import * as axios from 'axios';
import { getActorsAC, changeCurrentPageAC, setAllPagesAC } from '../../redux/actors-reducer';
import { connect } from 'react-redux';
import Companies from './Companies';

class CompaniesContainer extends React.Component {

    componentDidMount(){
        axios.get('https://api.themoviedb.org/3/person/popular?api_key=0867ba5883e921d5cf9d6599fc0767b0&language=en-US&page=1').
            then(response => {
                this.props.setAllPages(response.data.total_pages);
                this.props.getActors(response.data.results)
            })
    }

    onPathChange = (page) => {
        this.props.changeCurrentPage(page);
        axios.get(`https://api.themoviedb.org/3/person/popular?api_key=0867ba5883e921d5cf9d6599fc0767b0&language=en-US&page=${page}`).
            then(response => {
                this.props.setAllPages(response.data.total_pages);
                this.props.getActors(response.data.results)
            })
    }

    render() {
        return (
            <div>
                <Companies actors={this.props.actors} currentPage={this.props.currentPage} pageCount={this.props.pageCount} onPathChange={this.onPathChange}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    actors: state.actorsPage.actors,
    currentPage: state.actorsPage.currentPage,
    pageCount: state.actorsPage.pageCount
})

const mapDispatchToProps = (dispatch) => ({
    getActors: (actors) => {
        dispatch(getActorsAC(actors))
    },

    changeCurrentPage: (page) => {
        dispatch(changeCurrentPageAC(page))
    },

    setAllPages: (pageCount) => {
        dispatch(setAllPagesAC(pageCount))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesContainer);