// components/Illustration.tsx
interface IllustrationProps {
    type: string;
    size?: 'sm' | 'md' | 'lg';
    animated?: boolean;
}

export default function Illustration({
    type,
    size = 'md',
    animated = false,
}: IllustrationProps) {
    const sizeClasses = {
        sm: 'w-24 h-24',
        md: 'w-48 h-48',
        lg: 'w-64 h-64',
    };

    const renderIllustration = () => {
        switch (type) {
            case 'intro':
                return (
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <rect
                            x="40"
                            y="60"
                            width="120"
                            height="100"
                            rx="8"
                            fill="white"
                            stroke="#333"
                            strokeWidth="2"
                        />
                        <rect
                            x="40"
                            y="60"
                            width="120"
                            height="20"
                            rx="4"
                            fill="#f0f0f0"
                            stroke="#333"
                            strokeWidth="2"
                        />
                        <circle cx="52" cy="70" r="3" fill="#ff5f56" />
                        <circle cx="62" cy="70" r="3" fill="#ffbd2e" />
                        <circle cx="72" cy="70" r="3" fill="#27c93f" />
                        <text
                            x="100"
                            y="120"
                            textAnchor="middle"
                            fontSize="12"
                            fill="#333"
                            fontWeight="bold"
                        >
                            The Web
                        </text>
                        <text
                            x="100"
                            y="135"
                            textAnchor="middle"
                            fontSize="12"
                            fill="#333"
                            fontWeight="bold"
                        >
                            Can Be More
                        </text>
                        <text
                            x="100"
                            y="150"
                            textAnchor="middle"
                            fontSize="12"
                            fill="#333"
                            fontWeight="bold"
                        >
                            Than A
                        </text>
                        <path
                            d="M20 40 Q40 20 60 40 T100 40"
                            fill="#fbbf24"
                            opacity="0.6"
                        />
                        <path
                            d="M140 30 Q160 10 180 30 T200 30"
                            fill="#22c55e"
                            opacity="0.6"
                        />
                        <ellipse
                            cx="30"
                            cy="160"
                            rx="25"
                            ry="20"
                            fill="#ef4444"
                            opacity="0.6"
                        />
                    </svg>
                );

            case 'platform':
                return (
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <rect
                            x="50"
                            y="50"
                            width="100"
                            height="80"
                            rx="8"
                            fill="white"
                            stroke="#333"
                            strokeWidth="2"
                        />
                        <rect
                            x="50"
                            y="50"
                            width="100"
                            height="15"
                            rx="4"
                            fill="#f0f0f0"
                            stroke="#333"
                            strokeWidth="2"
                        />
                        <circle cx="60" cy="57" r="2.5" fill="#ff5f56" />
                        <circle cx="68" cy="57" r="2.5" fill="#ffbd2e" />
                        <circle cx="76" cy="57" r="2.5" fill="#27c93f" />
                        <circle
                            cx="100"
                            cy="90"
                            r="20"
                            fill="#22c55e"
                            opacity="0.8"
                        />
                        <text
                            x="100"
                            y="95"
                            textAnchor="middle"
                            fontSize="16"
                            fill="white"
                            fontWeight="bold"
                        >
                            $
                        </text>
                        <path
                            d="M70 90 L85 90"
                            stroke="#333"
                            strokeWidth="2"
                            markerEnd="url(#arrowhead)"
                        />
                        <path
                            d="M115 90 L130 90"
                            stroke="#333"
                            strokeWidth="2"
                            markerEnd="url(#arrowhead)"
                        />
                        <circle
                            cx="100"
                            cy="120"
                            r="15"
                            fill="#fbbf24"
                            opacity="0.8"
                        />
                        <text
                            x="100"
                            y="125"
                            textAnchor="middle"
                            fontSize="12"
                            fill="white"
                            fontWeight="bold"
                        >
                            $
                        </text>
                        <defs>
                            <marker
                                id="arrowhead"
                                markerWidth="10"
                                markerHeight="7"
                                refX="9"
                                refY="3.5"
                                orient="auto"
                            >
                                <polygon
                                    points="0 0, 10 3.5, 0 7"
                                    fill="#333"
                                />
                            </marker>
                        </defs>
                        <path
                            d="M30 100 Q50 80 70 100"
                            fill="#fbbf24"
                            opacity="0.5"
                        />
                        <path
                            d="M130 80 Q150 60 170 80"
                            fill="#22c55e"
                            opacity="0.5"
                        />
                        <ellipse
                            cx="160"
                            cy="140"
                            rx="20"
                            ry="15"
                            fill="#3b82f6"
                            opacity="0.6"
                        />
                        <ellipse
                            cx="40"
                            cy="160"
                            rx="15"
                            ry="12"
                            fill="#ef4444"
                            opacity="0.6"
                        />
                    </svg>
                );

            case 'files':
                return (
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <rect
                            x="60"
                            y="40"
                            width="80"
                            height="100"
                            rx="8"
                            fill="white"
                            stroke="#333"
                            strokeWidth="2"
                        />
                        <rect
                            x="60"
                            y="40"
                            width="80"
                            height="15"
                            rx="4"
                            fill="#f0f0f0"
                            stroke="#333"
                            strokeWidth="2"
                        />
                        <circle cx="70" cy="47" r="2.5" fill="#ff5f56" />
                        <circle cx="78" cy="47" r="2.5" fill="#ffbd2e" />
                        <circle cx="86" cy="47" r="2.5" fill="#27c93f" />
                        <rect
                            x="75"
                            y="70"
                            width="50"
                            height="60"
                            rx="4"
                            fill="white"
                            stroke="#333"
                            strokeWidth="2"
                            strokeDasharray="4"
                        />
                        <text
                            x="100"
                            y="105"
                            textAnchor="middle"
                            fontSize="24"
                            fill="#333"
                            fontWeight="bold"
                        >
                            T
                        </text>
                        <circle cx="130" cy="85" r="3" fill="#333" />
                        <path
                            d="M133 85 L145 80"
                            stroke="#333"
                            strokeWidth="2"
                        />
                        <polygon points="145,80 142,77 142,83" fill="#333" />
                        <ellipse
                            cx="50"
                            cy="150"
                            rx="20"
                            ry="15"
                            fill="#3b82f6"
                            opacity="0.8"
                        />
                        <ellipse
                            cx="150"
                            cy="160"
                            rx="25"
                            ry="18"
                            fill="#fbbf24"
                            opacity="0.8"
                        />
                        <ellipse
                            cx="100"
                            cy="175"
                            rx="15"
                            ry="12"
                            fill="#22c55e"
                            opacity="0.6"
                        />
                        <ellipse
                            cx="180"
                            cy="120"
                            rx="18"
                            ry="25"
                            fill="#ef4444"
                            opacity="0.5"
                        />
                    </svg>
                );

            case 'graphics':
                return (
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <rect
                            x="50"
                            y="50"
                            width="100"
                            height="80"
                            rx="8"
                            fill="white"
                            stroke="#333"
                            strokeWidth="2"
                        />
                        <rect
                            x="50"
                            y="50"
                            width="100"
                            height="15"
                            rx="4"
                            fill="#f0f0f0"
                            stroke="#333"
                            strokeWidth="2"
                        />
                        <circle cx="60" cy="57" r="2.5" fill="#ff5f56" />
                        <circle cx="68" cy="57" r="2.5" fill="#ffbd2e" />
                        <circle cx="76" cy="57" r="2.5" fill="#27c93f" />
                        <rect
                            x="65"
                            y="80"
                            width="40"
                            height="40"
                            fill="#3b82f6"
                            opacity="0.8"
                        />
                        <circle
                            cx="120"
                            cy="100"
                            r="20"
                            fill="white"
                            stroke="#333"
                            strokeWidth="2"
                        />
                        <path
                            d="M110 100 Q120 85 130 100 Q120 115 110 100"
                            fill="none"
                            stroke="#333"
                            strokeWidth="2"
                        />
                        <ellipse
                            cx="40"
                            cy="140"
                            rx="15"
                            ry="20"
                            fill="#22c55e"
                            opacity="0.6"
                        />
                        <ellipse
                            cx="160"
                            cy="130"
                            rx="20"
                            ry="15"
                            fill="#fbbf24"
                            opacity="0.6"
                        />
                        <path
                            d="M140 160 Q160 140 180 160"
                            fill="#ef4444"
                            opacity="0.5"
                        />
                    </svg>
                );

            case 'login':
                return (
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <rect
                            x="50"
                            y="50"
                            width="100"
                            height="80"
                            rx="8"
                            fill="white"
                            stroke="#333"
                            strokeWidth="2"
                        />
                        <rect
                            x="50"
                            y="50"
                            width="100"
                            height="15"
                            rx="4"
                            fill="#f0f0f0"
                            stroke="#333"
                            strokeWidth="2"
                        />
                        <circle cx="60" cy="57" r="2.5" fill="#ff5f56" />
                        <circle cx="68" cy="57" r="2.5" fill="#ffbd2e" />
                        <circle cx="76" cy="57" r="2.5" fill="#27c93f" />
                        <rect
                            x="70"
                            y="80"
                            width="60"
                            height="35"
                            rx="17.5"
                            fill="#333"
                        />
                        <rect
                            x="75"
                            y="85"
                            width="25"
                            height="25"
                            rx="12.5"
                            fill="white"
                        />
                        <circle cx="110" cy="97" r="8" fill="white" />
                        <circle cx="110" cy="97" r="3" fill="#333" />
                        <ellipse
                            cx="100"
                            cy="145"
                            rx="15"
                            ry="20"
                            fill="#ef4444"
                            opacity="0.8"
                        />
                        <ellipse
                            cx="150"
                            cy="120"
                            rx="20"
                            ry="15"
                            fill="#22c55e"
                            opacity="0.6"
                        />
                        <path
                            d="M30 100 Q50 80 70 100"
                            fill="#fbbf24"
                            opacity="0.5"
                        />
                        <ellipse
                            cx="170"
                            cy="160"
                            rx="18"
                            ry="25"
                            fill="#3b82f6"
                            opacity="0.5"
                        />
                    </svg>
                );

            case 'navigation':
                return (
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <rect
                            x="50"
                            y="50"
                            width="100"
                            height="80"
                            rx="8"
                            fill="white"
                            stroke="#333"
                            strokeWidth="2"
                        />
                        <rect
                            x="50"
                            y="50"
                            width="100"
                            height="15"
                            rx="4"
                            fill="#f0f0f0"
                            stroke="#333"
                            strokeWidth="2"
                        />
                        <circle cx="60" cy="57" r="2.5" fill="#ff5f56" />
                        <circle cx="68" cy="57" r="2.5" fill="#ffbd2e" />
                        <circle cx="76" cy="57" r="2.5" fill="#27c93f" />
                        <path
                            d="M70 85 L90 100 L70 115"
                            fill="none"
                            stroke="#333"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M95 110 L125 110"
                            stroke="#333"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                        <circle cx="130" cy="110" r="5" fill="#22c55e" />
                        <ellipse
                            cx="60"
                            cy="150"
                            rx="20"
                            ry="15"
                            fill="#fbbf24"
                            opacity="0.8"
                        />
                        <ellipse
                            cx="150"
                            cy="140"
                            rx="15"
                            ry="20"
                            fill="#3b82f6"
                            opacity="0.6"
                        />
                        <path
                            d="M120 160 Q140 140 160 160"
                            fill="#22c55e"
                            opacity="0.5"
                        />
                        <ellipse
                            cx="180"
                            cy="100"
                            rx="12"
                            ry="18"
                            fill="#ef4444"
                            opacity="0.5"
                        />
                    </svg>
                );

            default:
                return null;
        }
    };

    return (
        <div
            className={`${sizeClasses[size]} ${animated ? 'animate-float' : ''}`}
        >
            {renderIllustration()}
        </div>
    );
}
