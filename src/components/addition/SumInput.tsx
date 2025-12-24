import React from 'react'

export interface SumInputProps {
    id?: string;
    className?: string;
    numValue: string;
}

const SumInput = (props: SumInputProps) => {
    const { id, className, numValue } = props;

    return (
        <input type='number' id={id} className={className} value={numValue} readOnly/>
    )
}

export default SumInput;