// components/Card.tsx
import { forwardRef } from 'react';
import type { CardData } from '../types/types';
import Illustration from './Illustration';

interface CardProps {
    card: CardData;
    isSelected: boolean;
    isHidden: boolean;
    onClick: () => void;
    isAnimating: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ card, isSelected, isHidden, onClick, isAnimating }, ref) => {
        return (
            <div
                ref={ref}
                onClick={onClick}
                className={`
          relative bg-[#f5f5f5] rounded-3xl p-6 cursor-pointer
          transition-all duration-500 ease-out
          ${isHidden ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}
          ${isSelected && isAnimating ? 'invisible' : ''}
          hover:shadow-xl hover:-translate-y-1
          aspect-[4/5] flex flex-col
        `}
                style={{
                    transformOrigin: 'center center',
                }}
            >
                {/* Tag */}
                <span
                    className={`
          inline-block self-start px-3 py-1 rounded-full text-xs font-medium text-white mb-4
          ${card.tagColor}
        `}
                >
                    {card.tag}
                </span>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-900 leading-tight mb-4">
                    {card.shortTitle}
                </h2>

                {/* Illustration */}
                <div className="flex-1 flex items-center justify-center">
                    <Illustration type={card.illustration} size="md" />
                </div>
            </div>
        );
    },
);

Card.displayName = 'Card';
export default Card;
