// components/DetailView.tsx
import { useEffect, useState, useRef } from 'react';
import Illustration from './Illustration';
import type { CardData } from '../types/types';

interface DetailViewProps {
    card: CardData;
    onClose: () => void;
    isAnimating: boolean;
    originRect?: DOMRect;
}

export default function DetailView({
    card,
    onClose,
    // isAnimating,
    originRect,
}: DetailViewProps) {
    const [animationState, setAnimationState] = useState<
        'entering' | 'entered'
    >('entering');
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 진입 애니메이션 트리거
        requestAnimationFrame(() => {
            setAnimationState('entered');
        });
    }, []);

    const handleClose = () => {
        setAnimationState('entering');
        onClose();
    };

    // 초기 위치 계산 (FLIP 애니메이션)
    const getInitialStyles = () => {
        if (!originRect || animationState === 'entered') {
            return {
                top: '5%',
                left: '5%',
                width: '90%',
                height: '90%',
                borderRadius: '2rem',
            };
        }

        return {
            top: `${originRect.top}px`,
            left: `${originRect.left}px`,
            width: `${originRect.width}px`,
            height: `${originRect.height}px`,
            borderRadius: '1.5rem',
        };
    };

    const initialStyles = getInitialStyles();

    return (
        <div className="fixed inset-0 z-50 pointer-events-none">
            {/* Backdrop */}
            <div
                className={`
          absolute inset-0 bg-[#4285f4] pointer-events-auto
          transition-opacity duration-500
          ${animationState === 'entered' ? 'opacity-100' : 'opacity-0'}
        `}
            />

            {/* Detail Card */}
            <div
                className={`
          absolute bg-[#f5f5f5] pointer-events-auto overflow-hidden
          transition-all duration-500 ease-out
          shadow-2xl
        `}
                style={{
                    ...initialStyles,
                    ...(animationState === 'entered' && {
                        width: '60%',
                        left: '50%',
                    }),
                    transform:
                        animationState === 'entered'
                            ? 'translateX(-50%)'
                            : 'scale(1)',
                }}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className={`
            absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-gray-900 
            flex items-center justify-center text-white
            hover:bg-gray-800 transition-colors
            ${animationState === 'entered' ? 'opacity-100' : 'opacity-0'}
            transition-opacity duration-300 delay-200
          `}
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* Scrollable Content */}
                <div
                    ref={contentRef}
                    className={`
            h-full overflow-y-auto p-8 md:p-12
            ${animationState === 'entered' ? 'opacity-100' : 'opacity-0'}
            transition-opacity duration-300 delay-150
          `}
                    style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: 'rgba(0,0,0,0.2) transparent',
                    }}
                >
                    <div className="max-w-4xl mx-auto">
                        {/* Header Section */}
                        <div className="flex flex-col lg:flex-row gap-8 mb-12">
                            <div className="flex-1">
                                <span
                                    className={`
                  inline-block px-4 py-1.5 rounded-full text-sm font-medium text-white mb-6
                  ${card.tagColor}
                `}
                                >
                                    {card.tag}
                                </span>
                                <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                                    {card.title}
                                </h1>
                                {card.description && (
                                    <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                                        <span className="text-red-500 font-semibold">
                                            TL;DR
                                        </span>
                                        <br />
                                        {card.description}
                                    </p>
                                )}
                            </div>
                            <div className="flex-1 flex items-center justify-center">
                                <Illustration
                                    type={card.illustration}
                                    size="lg"
                                    animated
                                />
                            </div>
                        </div>

                        {/* Dynamic Content */}
                        {card.content && (
                            <div className="space-y-16">
                                {/* Opportunity Section */}
                                <section>
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-gray-200 text-sm font-medium text-gray-700 mb-4">
                                        The opportunity
                                    </span>
                                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                                        {card.content.opportunity}
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {card.content.opportunityText}
                                    </p>
                                </section>

                                {/* API Sections */}
                                {card.content.sections.map((section, idx) => (
                                    <section
                                        key={idx}
                                        className="grid md:grid-cols-2 gap-8 items-center"
                                    >
                                        <div
                                            className={
                                                idx % 2 === 1
                                                    ? 'md:order-2'
                                                    : ''
                                            }
                                        >
                                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                                {section.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed mb-4">
                                                {section.description}
                                            </p>
                                            <button className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                                                Here&apos;s how to get started
                                            </button>
                                        </div>
                                        <div
                                            className={`bg-gray-900 rounded-2xl overflow-hidden aspect-video ${idx % 2 === 1 ? 'md:order-1' : ''}`}
                                        >
                                            <div className="w-full h-full flex items-center justify-center text-white/50">
                                                {section.image ===
                                                'construct3' ? (
                                                    <div className="text-center">
                                                        <div className="text-4xl font-bold mb-2">
                                                            PMP LAB
                                                        </div>
                                                        <div className="text-sm">
                                                            Game Editor
                                                            Interface
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="text-center">
                                                        <div className="text-sm">
                                                            macOS Finder
                                                        </div>
                                                        <div className="text-xs opacity-60">
                                                            .excalidraw files
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </section>
                                ))}

                                {/* Use Case Section */}
                                <section>
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-gray-200 text-sm font-medium text-gray-700 mb-4">
                                        Use Cases
                                    </span>
                                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                                        {card.content.useCase.title}
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                                {
                                                    card.content.useCase
                                                        .description
                                                }
                                            </p>
                                        </div>
                                        <div className="bg-gray-100 rounded-2xl p-6">
                                            <blockquote className="text-gray-800 text-lg leading-relaxed mb-4">
                                                &ldquo;
                                                {card.content.useCase.quote}
                                                &rdquo;
                                            </blockquote>
                                            <cite className="text-sm text-gray-500 not-italic">
                                                — {card.content.useCase.author}
                                            </cite>
                                            <button className="mt-4 block px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                                                Read more
                                            </button>
                                        </div>
                                    </div>
                                </section>

                                {/* Stats Section */}
                                <section className="text-center py-12">
                                    <div className="inline-flex flex-col items-center">
                                        <span className="text-sm text-gray-500 mb-2">
                                            In Construct 3
                                        </span>
                                        <span className="text-6xl font-bold text-[#4285f4] mb-2">
                                            {card.content.useCase.stat}
                                        </span>
                                        <span className="text-gray-600 max-w-xs">
                                            {card.content.useCase.statLabel}
                                        </span>
                                    </div>
                                </section>

                                {/* Getting Started */}
                                <section className="space-y-8">
                                    <div className="text-center">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-gray-200 text-sm font-medium text-gray-700 mb-4">
                                            Getting started
                                        </span>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="border-t pt-6">
                                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                                File System Access API
                                            </h3>
                                            <p className="text-gray-600 mb-4">
                                                The File System Access API is
                                                currently supported on most
                                                Chromium browsers on Windows,
                                                macOS, ChromeOS, and Linux. For
                                                browsers that don&apos;t support
                                                these APIs, you can apply these{' '}
                                                <a
                                                    href="#"
                                                    className="text-blue-600 underline"
                                                >
                                                    fallback methods
                                                </a>
                                                .
                                            </p>
                                            <button className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                                                Get started
                                            </button>
                                        </div>
                                        <div className="border-t pt-6">
                                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                                File Handling API
                                            </h3>
                                            <p className="text-gray-600 mb-4">
                                                The File Handling API is also
                                                currently supported on most
                                                Chromium browsers and for those
                                                where support is limited, you
                                                can use{' '}
                                                <a
                                                    href="#"
                                                    className="text-blue-600 underline"
                                                >
                                                    progressive enhancement
                                                    techniques
                                                </a>{' '}
                                                to achieve your goals.
                                            </p>
                                            <button className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                                                Get started
                                            </button>
                                        </div>
                                    </div>
                                </section>

                                {/* Feedback */}
                                <section className="text-center py-8">
                                    <p className="text-gray-700 font-medium mb-4">
                                        Was this content helpful?
                                    </p>
                                    <div className="flex justify-center gap-4">
                                        <button className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200 transition-colors">
                                            <svg
                                                className="w-6 h-6 text-green-600"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                            </svg>
                                        </button>
                                        <button className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center hover:bg-red-200 transition-colors">
                                            <svg
                                                className="w-6 h-6 text-red-600"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                                            </svg>
                                        </button>
                                    </div>
                                </section>

                                {/* More Resources */}
                                <section>
                                    <h3 className="text-sm font-medium text-gray-500 mb-4">
                                        More resources
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gray-100 rounded-2xl overflow-hidden">
                                            <div className="h-32 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                                                <div className="grid grid-cols-6 gap-1">
                                                    {[...Array(24)].map(
                                                        (_, i) => (
                                                            <div
                                                                key={i}
                                                                className="w-4 h-4 rounded-full bg-white/30"
                                                            />
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <h4 className="font-semibold text-gray-900 mb-2">
                                                    How Photopea uses the File
                                                    Handling API to let users
                                                    open files from their file
                                                    explorer
                                                </h4>
                                                <p className="text-sm text-gray-600">
                                                    The File Handling API allows
                                                    web applications to register
                                                    themselves as a file handler
                                                    for file formats the
                                                    application can support.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-100 rounded-2xl overflow-hidden">
                                            <div className="h-32 bg-amber-100 flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-full bg-amber-200" />
                                            </div>
                                            <div className="p-4">
                                                <h4 className="font-semibold text-gray-900 mb-2">
                                                    Advanced web APIs in real
                                                    world apps
                                                </h4>
                                                <p className="text-sm text-gray-600">
                                                    Explore how a number of
                                                    partners use advanced web
                                                    APIs like file system
                                                    access, file handling,
                                                    eyedropper, local font
                                                    access, and more in their
                                                    real-world apps.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
