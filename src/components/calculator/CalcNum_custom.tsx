import React from 'react';

export interface CalcNumProps {
    displayNum: string;
    prevNum?: string;
}

const CalcNum = (props: CalcNumProps) => {
    const { displayNum, prevNum } = props;
    return (
        <div className='display-num'>{displayNum}</div>
    )
}

export default CalcNum;