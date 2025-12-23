import React from 'react';

export interface CalcButtonProps {
    calcNum: string;
    prevNum: string;
    setPrevNum: React.Dispatch<React.SetStateAction<string>>;
    setDisplayNum: React.Dispatch<React.SetStateAction<string>>;
    calcType: string;
    calcRunCheck: boolean
    calcDispatch: React.Dispatch<{ type: string; payload?: string }>;
}

const CalcButton = (props: CalcButtonProps) => {
    const { calcNum, prevNum, setPrevNum, setDisplayNum, calcType, calcRunCheck, calcDispatch } = props;

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
        if(calcRunCheck) {
            setPrevNum('0');
            calcDispatch({ type: 'calc' });
            setDisplayNum(calcNum);
            return;
        } else {
            setDisplayNum('0');
            calcDispatch({ type: calcType, payload: prevNum });
        }
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