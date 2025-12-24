import React from 'react';

export interface CalcButtonProps {
    calcType: string;
    calcDispatch: React.Dispatch<any>;
}

const CalcButton = (props: CalcButtonProps) => {
    const { calcType, calcDispatch } = props;

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
        if (calcType === 'calc') {
            calcDispatch({ type: 'EVALUATE' });
            return;
        }
        const symbol = mapTypeToSymbol(calcType);
        if (symbol) calcDispatch({ type: 'OPERATOR', payload: symbol });
    };

    return (
        <>
            {
                calcType === 'calc' ? 
                    <button className='calc-button calc-btn' onClick={calcTypeHandler}>=</button> 
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