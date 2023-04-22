import React from 'react';

type CountType = {
    count: number
    maxvalue:number
}

export const Count:React.FC<CountType> = ({count,maxvalue}) => {
    return (
        <div className={count === maxvalue?"max":''}>{count}</div>
    );
}

