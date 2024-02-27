import React from 'react';
import { TextContent } from '@/types';

const TextContentComponent: React.FC<{
    content: TextContent;
}> = ({ content }) => {
    const renderContent = () => {
        switch (content.type) {
            case 'paragraph':
                return <p>{content.content}</p>;
            case 'header':
                return <h1>{content.content}</h1>;
            case 'subheader':
                return <h2>{content.content}</h2>;
            default:
                return null;
        }
    };

    return <>{renderContent()}</>;
};

export default TextContentComponent;
