export type TextContent = {
    type: 'paragraph' | 'header' | 'subheader';
    content: string;
};

export type ImageContent = {
    type: 'image';
    src: string;
    alt?: string;
};

export type ListContent = {
    type: 'unorderedList';
    items: ListItem[];
};

export type ContentType =
    | TextContent
    | ImageContent
    | ListContent;

export type ListItem = {
    content: string;
};

export type LayoutType =
    | 'titleTopTextBottom'
    | 'titleSideBySideText'
    | 'titleTextSideBySideImage';

export type SectionPart = {
    layout: LayoutType;
    contents: (TextContent | ImageContent | ListContent)[];
};

export type WebPageSection = {
    title: string;
    parts: SectionPart[];
};

export type WebPage = {
    title: string;
    sections: WebPageSection[];
};
