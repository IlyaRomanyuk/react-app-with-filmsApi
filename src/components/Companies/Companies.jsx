import React, {useState} from 'react';
import style from './../Films/Films.module.css';

const Companies = (props) => {
    let portionSize = 20;

    let newArr = [];
    for(let i = 1; i <= props.pageCount; i++) {
        newArr.push(i);
    }

    let  portionCount = (props.pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = (portionNumber - 1) * portionSize + portionSize;

    return (
        <div className={style.filmContainer}>
            <div className={style.buttonNavigation}>
                {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>prev</button>}
                {newArr.
                filter(elem => {
                    if(elem >= leftPortionPageNumber && elem <= rightPortionPageNumber){
                        return elem
                    }
                })
                .map(element => {
                    return (
                        <span className={element == props.currentPage ? style.active : null} onClick={() => {props.onPathChange(element)}}>{element}</span>
                    )
                })}
                {portionNumber < portionCount && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>next</button>}
            </div>


            <div>
                {props.actors.map(element => {
                   return (
                       <div>
                           <p>{element.name}</p>
                            <p>{element.popularity}</p>
                            <img src={`https://image.tmdb.org/t/p/w300/${element.profile_path}`} />
                       </div>
                   ) 
                })}
            </div>
        </div>
    )
}

export default Companies;
