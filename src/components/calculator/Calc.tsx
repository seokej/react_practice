import { useReducer, useState } from 'react';
import { calcFunc } from '../../reducer/counterReducer';
import CalcNum from './CalcNum';
import CalcResetButton from './CalcResetButton';
import CalcDeleteButton from './CalcDeleteButton';
import CalcButton from './CalcButton';
import NumButton from './NumButton';

function Calc() {
    const [calcState, calcDispatch] = useReducer(calcFunc, { current: '0', previous: null, operator: null, overwrite: false });

    const calcReset = () => {
      calcDispatch({ type: 'RESET' });
    }

    const calcDelete = () => {
      calcDispatch({ type: 'DELETE' });
    }

    return (
        <div className="calc-wrap">
            <CalcNum value={calcState.current} />

            <div className="calc-top-button-wrap">
              {/* 연산자, 리셋, 딜리트 */}
                <CalcResetButton calcReset={calcReset} />
                <CalcDeleteButton calcDelete={calcDelete}/>
                <CalcButton calcType={'divide'} calcRunCheck={false} calcDispatch={calcDispatch} />
                <CalcButton calcType={'multiply'} calcRunCheck={false} calcDispatch={calcDispatch} />
            </div>

            <div className="calc-num-wrap">
              {/* 1~9 숫자 버튼들이 3칸 전체 차지 */}
              <NumButton calcDispatch={calcDispatch} />

              {/* 사칙연산 한 칸씩 */}
              <div className='calc-bottom-buttom-wrap'>
                <CalcButton calcType={'decrease'} calcRunCheck={false} calcDispatch={calcDispatch} />
                <CalcButton calcType={'increase'} calcRunCheck={false} calcDispatch={calcDispatch} />
                <CalcButton calcType={'calc'} calcRunCheck={true} calcDispatch={calcDispatch} />
              </div>
            </div>
        </div>
    ) 
}

export default Calc;