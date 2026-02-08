import React, { useState } from 'react';
import { MapLikeStyled } from './MapLikeStyled';

type Post = {
    id: number;
    title: string;
    likes: number;
    isLiked: boolean;
};

const MapLikeComponent = () => {
    const [posts, setPosts] = useState<Post[]>([
        { id: 1, title: '리액트 상태관리', likes: 12, isLiked: false },
        { id: 2, title: '타입스크립트 어렵다', likes: 34, isLiked: true },
        { id: 3, title: 'useCallback 언제 쓰나', likes: 7, isLiked: false },
    ]);

    const toggleLike = (id: number) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === id
                    ? {
                          ...post,
                          isLiked: !post.isLiked,
                          likes: post.isLiked ? post.likes + 1 : post.likes - 1,
                      }
                    : post,
            ),
        );
    };

    return (
        <MapLikeStyled>
            <div className="title">'map.()' 연습</div>
            <div>좋아요 토글 연습</div>

            {posts.map((post) => {
                return (
                    <button
                        className={`likeBtn ${post.isLiked ? 'liked' : ''} ${post.isAnimating ? 'animate' : ''}`}
                        onClick={() => toggleLike(post.id)}
                    >
                        <span className="heart">❤️</span>
                        <span className="count">{post.likes}</span>
                    </button>
                );
            })}
        </MapLikeStyled>
    );
};

export default MapLikeComponent;
