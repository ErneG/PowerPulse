import React from 'react';
import TextContentComponent from './TextContentComponent';
import ImageContentComponent from './ImageContentComponent';
import ListContentComponent from './ListContentComponent';

import { WebPageSection, ContentType, ListItem } from '@/types';

const SectionComponent: React.FC<{
    section: WebPageSection;
}> = ({ section }) => {
    const renderContent = (content: ContentType) => {
        switch (content.type) {
            case 'paragraph':
            case 'header':
            case 'subheader':
                return (
                    <TextContentComponent
                        key={content.content}
                        content={content}
                    />
                );
            case 'image':
                return (
                    <ImageContentComponent
                        key={content.src}
                        content={content}
                    />
                );
            case 'unorderedList':
                return (
                    <ListContentComponent
                        key={content.items
                            .map(
                                (item: ListItem) => item.content,
                            )
                            .join()}
                        content={content}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <section>
            <h2>{section.title}</h2>
            {section.parts.map((part, partIndex) => (
                <div
                    key={partIndex}
                    className={`layout-${part.layout}`}>
                    {part.contents.map((content) =>
                        renderContent(content),
                    )}
                </div>
            ))}
        </section>
    );
};

export default SectionComponent;
