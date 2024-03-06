import React from 'react';
import TextContentComponent from './TextContentComponent';
import ImageContentComponent from './ImageContentComponent';
import ListContentComponent from './ListContentComponent';

import {
    WebPageSection,
    SectionContent,
    ListItem,
} from '@/types';

const SectionComponent: React.FC<{
    section: WebPageSection;
}> = ({ section }) => {
    const renderContent = (content: SectionContent) => {
        switch (content.type) {
            case 'text':
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
            case 'list':
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
