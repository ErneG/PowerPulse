import React from 'react';
import { WebPage } from '@/types';
import SectionComponent from './SectionComponent';

const PageComponent: React.FC<{ page: WebPage }> = ({
    page,
}) => {
    return (
        <div>
            <h1>{page.title}</h1>
            {page.sections.map((section, index) => (
                <SectionComponent
                    key={index}
                    section={section}
                />
            ))}
        </div>
    );
};

export default PageComponent;
