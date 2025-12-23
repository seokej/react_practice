import React from 'react';

export interface CalcResetButtonProps {  
    calcReset: () => void;
}

const CalcResetButton = (props: CalcResetButtonProps) => {
    const { calcReset } = props;

    return (
      <button className='calc-reset-btn' onClick={calcReset}>Ac</button>
    )
}

export default CalcResetButton;