import React from 'react';

export interface CalcNumProps {
    value: string;
}

const CalcNum = (props: CalcNumProps) => {
    const { value } = props;

    return (
        <div className='display-num'>{value}</div>
    )
}

export default CalcNum;