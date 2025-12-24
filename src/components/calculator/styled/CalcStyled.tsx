import styled from 'styled-components';

export const CalcStyled = styled.div`
&.calc-wrap {
    display: flex;
    flex-direction: column;
    gap: 5.333vw;
    padding: 14.4vw 3.4vw 3.4vw;
    margin: 0 auto;
    font-family: 'poppins', sans-serif;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0;
    box-sizing: border-box;
    border-radius: 16px;
    background-color: #F7F8FB;
}

.display-num {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
    font-weight: 600;
    font-size: 48px;
    color: #424242;
    text-align: right;
}

.calc-top-button-wrap {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    align-items: center;
    justify-content: center;
    gap: 5.333vw;
}

.calc-reset-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 2rem;
    color: #858585;
    border-radius: 4.267vw;
    background: linear-gradient(129.7deg, rgba(255, 255, 255, 0.6) -9.69%, rgba(255, 255, 255, 0.4) 114.23%);
    border: 1px solid #FFFFFF;
    backdrop-filter: blur(6px);
}

.calc-delete-btn {
    height: 100%;
    padding: 4vw 4vw 4vw 3vw;
    background-color: #FBFCFD;
    border-radius: 4.267vw;
    backdrop-filter: blur(12px);
}

.calc-delete-btn svg {
    width: 100%;
    height: 100%;
}

.calc-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16.533vw;
    height: 16vw;
    width: 100%;
    height: 100%;
    font-size: 2.5rem;
    color: #109DFF;
    border-radius: 4.267vw;
    background-color: #ADE2FF;
    backdrop-filter: blur(12px);
}

.calc-button.decrease {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16.533vw;
    height: 16vw;
    font-size: 2.5rem;
    color: #109DFF;
    border-radius: 4.267vw;
    background-color: #ADE2FF;
    backdrop-filter: blur(12px);
}

.calc-button.increase {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16.533vw;
    height: 16vw;
    flex: 2 1 0;
    font-size: 2.5rem;
    color: #109DFF;
    border-radius: 4.267vw;
    background-color: #ADE2FF;
    backdrop-filter: blur(12px);
}

.calc-button.calc-btn {
    width: 16.533vw;
    height: 25.6vw;
    background: #19ACFF;
    box-shadow: -9px 13px 23px rgba(0, 163, 255, 0.65), inset -3px 4px 11px #B0DFFF;
    border-radius: 3.2vw;
}

.calc-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5.333vw;
}

.calc-num-wrap {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5.333vw;
}

.number-button-group {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5.333vw;
    grid-column: span 3;
}

.number-button.zero {
    width: 100%;
    grid-column: span 2; /* 0 이 두 칸 차지하도록 */
}

.number-button {
    width: 16.533vw;
    height: 16vw;
    font-size: 2rem;
    color: #424242;
    border-radius: 4.267vw;
    background: linear-gradient(129.7deg, rgba(255, 255, 255, 0.6) -9.69%, rgba(255, 255, 255, 0.4) 114.23%);
    border: 1px solid #FFFFFF;
    backdrop-filter: blur(6px);
}

.calc-bottom-buttom-wrap {
    display: flex;
    flex-direction: column;
    gap: 5.333vw;
}
`