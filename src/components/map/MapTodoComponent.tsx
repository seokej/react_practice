import React, { useState } from 'react';
import { MapStyle } from './MapStyle.css';

type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

interface Props {}

const MapTodoComponent = (props: Props) => {
    const todos: Todo[] = [
        { id: 1, text: 'React map 연습', completed: false },
        { id: 2, text: '불변성 이해하기', completed: true },
        { id: 3, text: 'useCallback 써보기', completed: false },
    ];

    const [isCompleted, setIsCompleted] = useState(false);

    const handleCompleted = () => {};

    return (
        <div className={MapStyle}>
            <div className="">'map.()' 연습</div>
            <div>좋아요 토글 연습</div>
            <button onClick={() => handleCompleted()}>좋아요</button>
        </div>
    );
};

export default MapTodoComponent;
