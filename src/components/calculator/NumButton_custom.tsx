import React, { useEffect } from 'react';

export interface NumButtonProps {
    setDisplayNum: React.Dispatch<React.SetStateAction<string>>;
    setPrevNum: React.Dispatch<React.SetStateAction<string>>;
    calcDispatch: React.Dispatch<{ type: string; payload: string }>;
}

const NumButton = (props: NumButtonProps) => {
    const { setPrevNum, setDisplayNum, calcDispatch } = props;

    const numClick = (n: string) => {
        setDisplayNum(prevN => {
            if (prevN === '0' && n !== '.') {
                return n;
            }   else {
                return prevN + n;
            }
        });
        setPrevNum(prev => {
            if (prev === '0' && n !== '.') {
                return n;
            }   else {  
                return prev + n;
            }   
        });

        if(n === '.' ) {
            calcDispatch({ type: '.', payload: n });
            return;
        }

        calcDispatch({ type: 'INPUT', payload: n });
    };

    return (
        <div className="number-button-group">
            {[7,8,9,4,5,6,1,2,3].map(n => (
                <button className="number-button" key={n} onClick={() => numClick(n.toString())}>{n}</button>
            ))}
            {/* 0과 .(dot)은 따로 추가 */}
            <button className="number-button zero" onClick={() => numClick('0')}>0</button>
            <button className="number-button dot" onClick={() => numClick('.')}>.</button>
        </div>
    )
}

export default NumButton;