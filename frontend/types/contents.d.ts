export type Settings = {
    themeToggleEnabled: boolean;
};

export type HeroHeader = {
    header: string;
    subheader: string;
    image: string;
};

export type Content = {
    text: string;
    subtext: string;
    image: string;
};

export type ContentSection = {
    header: string;
    subheader: string;
    image?: string;
    content: Array<Content>;
};

export type Layout = {
    heroHeader: string;
    featureCards: string;
    headers: {
        featureCards: string;
        features: string;
    };
};
