import React, { useState } from 'react';
import { MapStyle } from './MapStyle.css';

type Post = {
    id: number;
    title: string;
    likes: number;
    isLiked: boolean;
};

interface Props {}

const MapCartComponent = (props: Props) => {
    const cartItems: CartItem[] = [
        { id: 101, name: '키보드', price: 50000, quantity: 1 },
        { id: 102, name: '마우스', price: 30000, quantity: 2 },
        { id: 103, name: '모니터', price: 250000, quantity: 1 },
    ];

    const [isQuantity, setIsQuantity] = useState(false);

    const handleQuantity = () => {};

    return (
        <div className={MapStyle}>
            <div className="">'map.()' 연습</div>
            <div>좋아요 토글 연습</div>
            <button onClick={() => handleQuantity()}>좋아요</button>
        </div>
    );
};

export default MapCartComponent;
