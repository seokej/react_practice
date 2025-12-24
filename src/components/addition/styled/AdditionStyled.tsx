import styled from 'styled-components';

export const AdditionStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 5.333vw;
    font-family: 'poppins', sans-serif;
    font-weight: 500;
    font-size: 30px;
    letter-spacing: 0;

    .title {
        font-size: 40px;
        font-weight: 700;
    }

    .num-wrap {
        width: 100%;
    }

    .num-inner {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 5.333vw;
    }

    .sum-wrap {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5.333vw;
    }

    .first-num,    
    .second-num,
    .sum-num {
        width: 24vw;
        padding: 4vw;
        font-family: 'poppins', sans-serif;
        font-weight: 500;
        font-size: 24px;
        color: #424242;
        border: none;
        border-radius: 3vw;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .sum-num {
        text-align: right;
        font-weight: 700;
        background-color: #f0f0f0;
    }

    .first-num:focus,    
    .second-num:focus,
    .sum-num:focus {
        outline: solid 1px #000;
    }

    .button-wrap {
        margin-top: 5.333vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 5.333vw;
        width: 100%;
    }

    .sum-btn,
    .delete-btn {
        width: 40vw;    
        padding: 4vw;
        font-family: 'poppins', sans-serif;
        font-weight: 600;
        font-size: 24px;
        border: none;
        border-radius: 3vw;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        background-color: #4CAF50;
        color: white;
    }
`