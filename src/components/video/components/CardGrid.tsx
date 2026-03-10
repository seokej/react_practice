// components/CardGrid.tsx
import type { RefObject } from 'react';
import type { CardData, CardId } from '../types/types';
import Card from './Card';

interface CardGridProps {
    cards: CardData[];
    selectedCard: CardId | null;
    onCardClick: (id: CardId) => void;
    cardRefs: RefObject<Map<CardId, HTMLDivElement>>;
    isAnimating: boolean;
}

export default function CardGrid({
    cards,
    selectedCard,
    onCardClick,
    cardRefs,
    isAnimating,
}: CardGridProps) {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                        isSelected={selectedCard === card.id}
                        isHidden={
                            selectedCard !== null && selectedCard !== card.id
                        }
                        onClick={() => onCardClick(card.id)}
                        ref={(el) => {
                            if (el) cardRefs.current?.set(card.id, el);
                        }}
                        isAnimating={isAnimating}
                    />
                ))}
            </div>
        </div>
    );
}
