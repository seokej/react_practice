import React from 'react';

export interface CalcButtonProps {
    calcType: string;
    calcRunCheck: boolean;
    calcDispatch: React.Dispatch<any>;
}

const CalcButton = (props: CalcButtonProps) => {
    const { calcType, calcRunCheck, calcDispatch } = props;

    const mapTypeToSymbol = (type: string) => {
        switch (type) {
            case 'increase': return '+';
            case 'decrease': return '-';
            case 'multiply': return '×';
            case 'divide': return '÷';
            default: return '';
        }
    }

    const calcTypeHandler = () => {
        if (calcRunCheck) {
            calcDispatch({ type: 'EVALUATE' });
            return;
        }
        const symbol = mapTypeToSymbol(calcType);
        if (symbol) calcDispatch({ type: 'OPERATOR', payload: symbol });
    };

    return (
        <>
            {
                calcRunCheck ? 
                    <button className='calc-button run-btn' onClick={calcTypeHandler}>=</button> 
                : 
                (
                    <button className={'calc-button ' + calcType} onClick={calcTypeHandler}>
                        {mapTypeToSymbol(calcType)}
                    </button>
                )
            }
        </>
    )   
}

export default CalcButton;