import { WebPage } from '@/types';

export const mainPage: WebPage = {
    title: 'Main Page',
    sections: [
        {
            title: 'Welcome to Our Service',
            parts: [
                {
                    layout: 'titleTopTextBottom',
                    contents: [
                        {
                            type: 'text',
                            subType: 'header',
                            content:
                                'Smart Energy, Smarter Savings.',
                        },
                        {
                            type: 'text',
                            subType: 'subheader',
                            content:
                                'Utilizing real-time data and predictive analytics, we buy low and sell high on your behalf, 24/7.',
                        },
                        {
                            type: 'image',
                            src: '/hero-img.webp',
                            alt: 'An illustration of smart energy savings',
                        },
                    ],
                },
            ],
        },
        {
            title: 'Our Services',
            parts: [
                {
                    layout: 'titleSideBySideText',
                    contents: [
                        {
                            type: 'text',
                            subType: 'header',
                            content:
                                'Comprehensive Energy Solutions',
                        },
                        {
                            type: 'text',
                            subType: 'paragraph',
                            content:
                                'Explore our wide range of services designed to ensure you save on your energy bills while maximizing efficiency.',
                        },
                        {
                            type: 'image',
                            src: '/services-img.webp',
                            alt: 'Energy solutions',
                        },
                    ],
                },
            ],
        },
    ],
};
