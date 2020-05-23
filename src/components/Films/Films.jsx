import React, {useState} from 'react';
import Preloader from './../Preloader/Preloader';
import style from './Films.module.css';
import { Redirect, NavLink } from 'react-router-dom';


const Films = (props) => {
    let portionSize = 20;
    let newArray = [];
    for (let i = 1; i <= props.pageCount; i++) {
        newArray.push(i);
    }

    let redirect = (id) => {
        props.aboutThisFilm(id);
    }


    let  portionCount = (props.pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = (portionNumber - 1) * portionSize + portionSize;

    return (
        <div className={style.filmContainer}>
            <svg style={{display: "none"}}>
                <symbol id='heartR' viewBox="0 -28 512.001 512">
                    <g>
                        <path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"/>
                    </g>
                </symbol>
            </svg>
            <div className={style.buttonNavigation}>
                {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>prev</button>}
                {newArray.filter(element => {
                    if ((element >= leftPortionPageNumber) && (element <= rightPortionPageNumber)) {
                        return element
                    }
                }).map(element => {
                    return (
                        <span className={element == props.currentPage ? style.active : null} onClick={() => props.onPathChange(element)}>{element}</span>
                    )
                })}
                {portionNumber < portionCount && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>next</button>}
            </div>

            <button onClick={props.sortByTop} onDoubleClick={props.sortByDown} className={style.buttonSort}>Sort by top</button>

            {props.films.map(element => {
                return (
                    <div className={style.container}>
                        <div className={style.picturesItems}>
                            <div className={style.image}>
                                <NavLink to={"favorite"}>
                                    <img onClick={() => {redirect(element.id)}} src={`https://image.tmdb.org/t/p/w300/${element.backdrop_path}`} alt='picture' />
                                </NavLink>
                            </div>

                            <div className={style.informationFilm}>
                                <div className={style.title}>
                                    <h4>{element.original_title}</h4>
                                    <svg onClick={() => {props.onHeartClick(element.id)}} className={element.followed ? style.heart + ' ' + style.checked : style.heart} >
                                        <use xlinkHref="#heartR"></use>
                                    </svg>
                                </div>     
                                <p>rating: {element.vote_average}</p>
                                <p>overview: {element.overview}</p>
                            </div>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Films;