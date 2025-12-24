import React from 'react'

export interface NumInputProps {
    className?: string;
    numValue: string;
    setNumValue: React.Dispatch<React.SetStateAction<string>>;
}

const NumInput = (props: NumInputProps) => {
    const { className, numValue, setNumValue } = props;

    return (
        <input type='number' className={className} value={numValue} onChange={(e) => setNumValue(e.target.value)}/>
    )
}

export default NumInput;