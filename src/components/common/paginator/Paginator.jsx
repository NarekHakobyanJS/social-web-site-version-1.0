import React, {useState} from 'react';
import s from "./Paginator.module.css";

const Paginator = React.memo(({ totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10}) => {
    
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPosrtionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    return (
        <div className={s.paginator}>
            {
                portionNumber > 1 && 
                <button onClick={() => setPosrtionNumber(portionNumber - 1)}>prev</button>
            }
            {
                pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
                .map(p => {
                    return <span className={currentPage === p ? s.selectedPage : s.page}
                        onClick={(e) => { onPageChanged(p) }}
                    >{p}</span>
                })
            }
            {
                portionCount > portionNumber && 
                <button onClick={() => setPosrtionNumber(portionNumber + 1)}>next</button>
            }
            <div>
            </div>
        </div>
    )
})

export default Paginator

