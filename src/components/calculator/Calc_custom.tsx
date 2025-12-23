import { useReducer, useState } from 'react';
import { calcFunc_custom } from '../../reducer/counterReducer_custom';
import CalcResetButton from './CalcResetButton';
import CalcButton_custom from './CalcButton_custom';
import CalcDeleteButton from './CalcDeleteButton';
import CalcNum_custom from './CalcNum_custom';
import NumButton_custom from './NumButton_custom';

function App() {
    const [displayNum, setDisplayNum] = useState('0');
    const [prevNum, setPrevNum] = useState('0');
    const [calcNum, calcDispatch] = useReducer(calcFunc_custom, '0');
    // const [calcState, calcDispatch] = useReducer(calcFunc, { current: '0', previous: null, operator: null, overwrite: false });

    const calcReset = () => {
      calcDispatch({ type: 'reset' });
    }

    const calcDelete = () => {
      calcDispatch({ type: 'delete' });
    }

    return (
        <div className="calc-wrap">
            <CalcNum_custom displayNum={displayNum} prevNum={prevNum} />

            <div className="calc-top-button-wrap">
              {/* 연산자, 리셋, 딜리트 */}
                <CalcResetButton calcReset={calcReset} />
                <CalcDeleteButton calcDelete={calcDelete}/>
                <CalcButton_custom calcNum={calcNum} setPrevNum={setPrevNum} setDisplayNum={setDisplayNum} prevNum={prevNum} calcType={'divide'} calcRunCheck={false} calcDispatch={calcDispatch} />
                <CalcButton_custom calcNum={calcNum} setPrevNum={setPrevNum} setDisplayNum={setDisplayNum} prevNum={prevNum} calcType={'multiply'} calcRunCheck={false} calcDispatch={calcDispatch} />
            </div>

            <div className="calc-num-wrap">
              {/* 1~9 숫자 버튼들이 3칸 전체 차지 */}
              <NumButton_custom calcDispatch={calcDispatch} setPrevNum={setPrevNum} setDisplayNum={setDisplayNum} />

              {/* 사칙연산 한 칸씩 */}
              <div className='calc-bottom-buttom-wrap'>
                <CalcButton_custom calcNum={calcNum} setPrevNum={setPrevNum} setDisplayNum={setDisplayNum} prevNum={prevNum} calcType={'decrease'} calcRunCheck={false} calcDispatch={calcDispatch} />
                <CalcButton_custom calcNum={calcNum} setPrevNum={setPrevNum} setDisplayNum={setDisplayNum} prevNum={prevNum} calcType={'increase'} calcRunCheck={false} calcDispatch={calcDispatch} />
                <CalcButton_custom calcNum={calcNum} setPrevNum={setPrevNum} setDisplayNum={setDisplayNum} prevNum={prevNum} calcType={'calc'} calcRunCheck={true} calcDispatch={calcDispatch} />
              </div>
            </div>
        </div>
    ) 
}

export default App;