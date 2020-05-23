import React from 'react';
const GET_ACTORS = 'GET_ACTORS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const SET_ALL_PAGES = 'SET_ALL_PAGES';

let initialState = {
    actors: [],
    currentPage: 1,
    pageCount: 0
}

let actorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACTORS: {
            return {
                ...state,
                actors: action.actors
            }
        }

        case CHANGE_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case SET_ALL_PAGES: {
            return {
                ...state,
                pageCount: action.pageCount
            }
        }

        default: return state
    }
}

export const getActorsAC = (actors) => ({type: GET_ACTORS, actors});
export const changeCurrentPageAC = (currentPage) => ({type: CHANGE_CURRENT_PAGE, currentPage});
export const setAllPagesAC = (pageCount) => ({type: SET_ALL_PAGES, pageCount})

export default actorsReducer;

