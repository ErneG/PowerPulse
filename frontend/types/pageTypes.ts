const textContentTypeObj = {
    paragraph: 'paragraph',
    header: 'header',
    subheader: 'subheader',
} as const;

type TextContentType =
    (typeof textContentTypeObj)[keyof typeof textContentTypeObj];

export type TextContent = {
    type: 'text';
    subType: TextContentType;
    content: string;
};

export type ImageContent = {
    type: 'image';
    src: string;
    alt?: string;
};

const ListContentTypeObj = {
    unorderedList: 'unorderedList',
    orderedList: 'orderedList',
} as const;
type ListContentType =
    (typeof ListContentTypeObj)[keyof typeof ListContentTypeObj];

export type ListContent = {
    type: 'list';
    subtype: ListContentType;
    items: ListItem[];
};

//Currently only supports strings, but could be expanded to support any other type
export type ListItem = {
    content: string;
};

export type SectionContent =
    | TextContent
    | ImageContent
    | ListContent;

export type LayoutType =
    | 'titleAndContentLeftPictureRight'
    | 'titleAndContentRightPictureLeft'
    | 'titleTopTextBottom';

export type LayoutType1 = {
    type: 'titleAndContentLeftPictureRight';
    contents: [TextContent, TextContent, ImageContent];
};

export type SectionPart = {
    layout: LayoutType;
    contents: SectionContent[];
};

export type WebPageSection = {
    title: string;
    parts: SectionPart[];
};

export type WebPage = {
    title: string;
    sections: WebPageSection[];
};
