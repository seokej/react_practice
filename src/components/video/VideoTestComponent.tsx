// VideoTestComponent.tsx
import { useState, useRef, useEffect } from 'react';
import type { CardData, CardId } from './types/types';
import CardGrid from './components/CardGrid';
import DetailView from './components/DetailView';

const cardsData: CardData[] = [
    {
        id: 'intro',
        tag: 'Introduction',
        tagColor: 'bg-blue-500',
        title: 'The Web Can Be More Than A Landing Page',
        shortTitle: 'The Web Can Be More Than A Landing Page',
        description: '',
        illustration: 'intro',
    },
    {
        id: 'platform',
        tag: 'The web can',
        tagColor: 'bg-yellow-500',
        title: 'Bring code from platforms into the browser',
        shortTitle: 'Bring code from platforms into the browser',
        description: '',
        illustration: 'platform',
    },
    {
        id: 'files',
        tag: 'The web can',
        tagColor: 'bg-red-500',
        title: 'Interact seamlessly with local files',
        shortTitle: 'Interact seamlessly with local files',
        description:
            "With the help of a couple powerful APIs, building web apps that interact with files on the user's local device is more efficient than ever before.",
        illustration: 'files',
        content: {
            opportunity: 'More intuitive file interactions',
            opportunityText:
                "Gone are the days of user's uploading a file, making their changes and downloading a new version of that same file. Web apps that interact with files on the user's local device can offer a more seamless experience by leveraging APIs that work directly with the user's operating system.",
            sections: [
                {
                    title: 'File System Access API',
                    description:
                        "Using the File System Access API, when a user grants a web app access, it allows them to read or write changes directly to files and folders on the user's device.",
                    image: 'construct3',
                },
                {
                    title: 'File Handling API',
                    description:
                        "The File Handling API makes it possible to let developers register web apps as file handlers for the file types that their apps can create and process. This means users can click such files in their operating system's file explorer and the web app would then open and handle the file in question.",
                    image: 'excalidraw',
                },
            ],
            useCase: {
                title: 'Enabling users to save projects in Construct 3 to the file system',
                description:
                    "Construct 3 is a game editor developed by the brothers Thomas and Ashley Gullen. For the present third iteration of their game editor, the two went all-in on the web.\n\nThe Construct team have found working with files on the user's file system to be very intuitive for customers. It works similarly to traditional desktop apps, and integrates conveniently with other software. For example, backup software can make backups of user's files, or for easily sending work to other places, or editing files with external tools. They also use the File System Access API for various other use cases, such as selecting a backup folder or importing assets like animations.",
                quote: "We're betting on the browser being the new operating system [...] when we think about the potential of the browser to serve complex software such as ours [we] can't see any reason why this isn't going to be the future.",
                author: 'Thomas Gullen, Co-founder of Construct3',
                stat: '65%',
                statLabel:
                    'of saves are completed by using the File System Access API',
            },
        },
    },
    {
        id: 'graphics',
        tag: 'The web can',
        tagColor: 'bg-blue-500',
        title: 'Render heavy graphics in the browser',
        shortTitle: 'Render heavy graphics in the browser',
        description: '',
        illustration: 'graphics',
    },
    {
        id: 'login',
        tag: 'The web can',
        tagColor: 'bg-green-500',
        title: 'Simplify secure logins',
        shortTitle: 'Simplify secure logins',
        description: '',
        illustration: 'login',
    },
    {
        id: 'navigation',
        tag: 'The web can',
        tagColor: 'bg-red-500',
        title: 'Deliver app-like navigations',
        shortTitle: 'Deliver app-like navigations',
        description: '',
        illustration: 'navigation',
    },
];

function VideoTestComponent() {
    const [selectedCard, setSelectedCard] = useState<CardId | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const cardRefs = useRef<Map<CardId, HTMLDivElement>>(new Map());

    const handleCardClick = (id: CardId) => {
        if (isAnimating) return;
        setSelectedCard(id);
        setIsAnimating(true);
    };

    const handleClose = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        // 애니메이션 후 상태 초기화
        setTimeout(() => {
            setSelectedCard(null);
            setIsAnimating(false);
        }, 500);
    };

    useEffect(() => {
        if (selectedCard) {
            // 애니메이션 완료 후 상태 업데이트
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [selectedCard]);

    return (
        <div className="min-h-screen bg-[#4285f4] relative overflow-hidden">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 text-white">
                <button className="text-sm font-medium hover:opacity-80 transition-opacity">
                    About
                </button>
                <h1 className="text-sm font-medium">The Web Can Do What?</h1>
                <button className="text-sm font-medium hover:opacity-80 transition-opacity">
                    Share
                </button>
            </header>

            {/* Main Content */}
            <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 min-h-screen">
                <CardGrid
                    cards={cardsData}
                    selectedCard={selectedCard}
                    onCardClick={handleCardClick}
                    cardRefs={cardRefs}
                    isAnimating={isAnimating}
                />
            </main>

            {/* Detail View Overlay */}
            {selectedCard && (
                <DetailView
                    card={cardsData.find((c) => c.id === selectedCard)!}
                    onClose={handleClose}
                    isAnimating={isAnimating}
                    // eslint-disable-next-line react-hooks/refs
                    originRect={cardRefs.current
                        .get(selectedCard)
                        ?.getBoundingClientRect()}
                />
            )}

            {/* Footer */}
            <footer className="fixed bottom-0 left-0 right-0 z-40 flex justify-between items-center px-8 py-4 text-white text-xs">
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    </div>
                    <span>Chrome for Developers</span>
                </div>
                <div className="flex gap-4">
                    <button className="hover:opacity-80 transition-opacity">
                        Share
                    </button>
                    <button className="hover:opacity-80 transition-opacity">
                        Privacy
                    </button>
                </div>
            </footer>
        </div>
    );
}

export default VideoTestComponent;
