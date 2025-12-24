import React from 'react'
import { AdditionStyled } from './styled/AdditionStyled';
import NumInput from './NumInput';
import SumInput from './SumInput';
import ControlButton from './ControlButton';

export interface AdditionProps {
}

const Addition = (props: AdditionProps) => {
    const [firstNum, setFirstNum] = React.useState('');
    const [secondNum, setSecondNum] = React.useState('');
    const [sum, setSum] = React.useState('');

    const handleSum = () => {
        const value = (Number(firstNum) + Number(secondNum)).toString();
        setSum(value);
    }

    const handleDelete = () => {
        setFirstNum('');
        setSecondNum('');
        setSum('');
    }

    return (
        <AdditionStyled>
            <h1 className='title'>Addition</h1>

            <div className="num-wrap">
                <div className="num-inner">
                    <NumInput className='first-num' numValue={firstNum} setNumValue={setFirstNum} />
                    <span>+</span>
                    <NumInput className='second-num' numValue={secondNum} setNumValue={setSecondNum} />
                </div>
            </div>

            <div className='sum-wrap'>
                <div>=</div>
                <SumInput id='sum-num' className='sum-num' numValue={sum} />
            </div>
            
            <div className="button-wrap">
                <ControlButton onClick={handleSum} className='sum-btn' text='Sum' />
                <ControlButton onClick={handleDelete} className='delete-btn' text='Delete' />
            </div>
        </AdditionStyled>
    )
}

export default Addition;