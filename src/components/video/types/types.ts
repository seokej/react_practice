// types.ts
export type CardId =
    | 'intro'
    | 'platform'
    | 'files'
    | 'graphics'
    | 'login'
    | 'navigation';

export interface CardContent {
    opportunity: string;
    opportunityText: string;
    sections: {
        title: string;
        description: string;
        image: string;
    }[];
    useCase: {
        title: string;
        description: string;
        quote: string;
        author: string;
        stat: string;
        statLabel: string;
    };
}

export interface CardData {
    id: CardId;
    tag: string;
    tagColor: string;
    title: string;
    shortTitle: string;
    description: string;
    illustration: string;
    content?: CardContent;
}
