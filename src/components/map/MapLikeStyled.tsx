import styled from 'styled-components';

export const MapLikeStyled = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-size: 24px;

    .likeBtn {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2px;
        padding: 10px 16px;
        font-size: 24px;
        border-radius: 80px;
        border: solid 2px #545454;
        cursor: pointer;
    }

    .heart {
        display: inline-block;
        transition: transform 0.2s ease;
    }

    /* 좋아요 눌린 순간 */
    .likeBtn:active .heart {
        transform: scale(1.3);
    }

    /* 하트 튀는 애니메이션 */
    @keyframes pop {
        0% {
            transform: scale(1);
        }
        40% {
            transform: scale(1.4);
        }
        100% {
            transform: scale(1);
        }
    }
`;
