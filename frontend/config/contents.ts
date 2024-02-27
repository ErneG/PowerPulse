import { HeroHeader, ContentSection } from '@/types/contents';

export const heroHeader: HeroHeader = {
    header: `Smart Energy, Smarter Savings.`,
    subheader: `Utilizing real-time data and predictive analytics, we buy low and sell high on your behalf, 24/7`,
    image: `/hero-img.webp`,
};

export const featureCards: ContentSection = {
    header: `Powered by`,
    subheader: `What makes Next Landing possible`,
    content: [
        {
            text: `Next.js`,
            subtext: `The React Framework`,
            image: `/icons8-nextjs-144.png`,
        },
        {
            text: `NestJs`,
            subtext: `Easily scalable backend framework`,
            image: `/NestJS.svg`,
        },
        {
            text: `Tailwind CSS`,
            subtext: `Elegantly crafted styles`,
            image: `/Tailwind.png`,
        },
        {
            text: `Vercel`,
            subtext: `Platform for hosting online services`,
            image: `/vercel.svg`,
        },
        {
            text: `Prisma`,
            subtext: `Database manager that will help you any time`,
            image: `/icons8-prisma-orm-144.png`,
        },
        {
            text: `PostgreSQL`,
            subtext: `SQL Database`,
            image: `/icons8-postgresql-144.png`,
        },
    ],
};
