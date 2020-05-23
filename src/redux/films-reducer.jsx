const SET_FILMS = 'SET_FILMS';
const SET_ALL_PAGES = 'SET_ALL_PAGES';
const IS_FETCHING = 'IS_FETCHING';
const ON_PATH_CHANGE = 'ON_PATH_CHANGE';
const ON_HEART_CLICK = 'ON_HEART_CLICK';
const ABOUT_THIS_FILM = 'ABOUT_THIS_FILM';
const FILMS_ON_TOP = 'FILMS_ON_TOP';
const FILMS_ON_DOWN = 'FILMS_ON_DOWN';

let initialState = {
    films: [],
    pageCount: 0,
    currentPage: 1,
    isFetching: true,
    currentFilm: null
}

let filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS: {
            return {
                ...state,
                films: action.films
            }
        }

        case SET_ALL_PAGES: {
            return {
                ...state,
                pageCount: action.pageCount
            }
        }

        case IS_FETCHING: {
            return {
                ...state,
                isFetching: action.bool
            }
        }

        case ON_PATH_CHANGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case ABOUT_THIS_FILM: {
            return {
                ...state,
                currentFilm: action.id
            }
        }

        case FILMS_ON_TOP: {
            return{
                ...state,
                films: [...state.films].sort((a, b) => b.vote_average - a.vote_average)
            }
        }

        case FILMS_ON_DOWN: {
            return {
                ...state,
                films: [...state.films].sort((a, b) => a.vote_average - b.vote_average)
            }
        }

        case ON_HEART_CLICK: {
            return {
                ...state,
                films: state.films.map(element => {
                    if (element.id == action.id) {
                        if (element.followed === undefined) {
                            return { ...element, followed: true }
                        } else {
                            return { ...element, followed: !element.followed }
                        }

                    }
                    return element
                })
            }

        }
        default: return state

    }
}

export const setFilmsAC = (films) => ({ type: SET_FILMS, films })
export const setAllPagesAC = (pageCount) => ({ type: SET_ALL_PAGES, pageCount })
export const isFetchingAC = (bool) => ({ type: IS_FETCHING, bool });
export const onPathChangeAC = (currentPage) => ({ type: ON_PATH_CHANGE, currentPage })
export const onHeartClickAC = (id) => ({ type: ON_HEART_CLICK, id })
export const onSomeFilmAC = (id) => ({ type: ABOUT_THIS_FILM, id })
export const onSortByTopAC = () => ({ type: FILMS_ON_TOP })
export const onSortByDownAC = () => ({ type: FILMS_ON_DOWN })

export default filmsReducer;

